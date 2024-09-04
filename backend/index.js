const express = require("express");
const app = express();
const mongoose = require("mongoose");
try {
  mongoose.connect(
    "your mongo db url"
  );
 
  console.log("successfully connected");
} catch (error) {
  console.log("this is the error", error);
}
const cors = require("cors");
app.use(cors());
 
const user = require("./user");
const feedback = require("./feedback");
const admin = require("./admin");
const room = require("./room");
const booking = require("./booking");
const pin = require("./pin"); // Import Pin model
const gallery = require("./gallery");


const bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json());

app.post("/signup", async (req, res) => {
  let result = new user(req.body);
  let data = await result.save();
  res.send(data);
});

app.get("/checkusername", async (req, res) => {
  const username = req.body.username;
  const user = await user.findOne({ username });
  if (user) {
    res.json({ exists: true });
  } else {
    res.json({ exists: false });
  }
});

app.get("/checkemail", async (req, res) => {
  const email = req.body.email;
  const user = await user.findOne({ email });
  if (user) {
    res.json({ exists: true });
  } else {
    res.json({ exists: false });
  }
});
app.post("/addtogallery", async (req, res) => {
  let result = new gallery(req.body); 
  let data = await result.save();
  res.send(data);
});
app.post("/generatepin", async (req, res) => {
  try {
    // Create a new Pin document based on the request body
    const result = new pin(req.body);
    const data = await result.save();
    res.status(201).json(data); // Send the newly created pin in the response
  } catch (error) {
    console.error("Error generating pin:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get('/pins', async (req, res) => {
    try {
        console.log('Fetching pins...');
        const pins = await pin.find();
        res.json(pins);
    } catch (error) {
        console.error("Error fetching pins:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
// app.get('/pins/:username', async (req, res) => {
//   try {
//       console.log('Fetching pins...');
//       const pins = await pin.find();
//       res.json(pins);
//   } catch (error) {
//       console.error("Error fetching pins:", error);
//       res.status(500).json({ error: "Internal Server Error" });
//   }
// });
app.get('/pins/:username', async (req, res) => {
  try {
    const username = req.params.username;
    console.log(`Fetching pins for user: ${username}`);
    const pins = await pin.find({ transfer_to: username });
    console.log(`Found pins: ${pins}`); // Debug log to check fetched pins
    res.json(pins);
  } catch (error) {
    console.error("Error fetching pins:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


app.put("/transferpin/:id", async (req, res) => {
  try {
    let data = await pin.updateOne({ _id: req.params.id }, { $set: req.body });
    res.send(data);
  } catch (error) {
    console.error('Error transferring pin:', error);
    res.status(500).send('Error transferring pin');
  }
});

app.put('/usepin/:id', async (req, res) => {
  const pinId = req.params.id;
  const { status } = req.body;
  const username = req.body.used_by; // Username of the person using the pin

  try {
    // Update the pin status
    const updatedPin = await pin.findByIdAndUpdate(
      pinId,
      { status },
      { new: true }
    );

    if (status === "0") { // If the pin is used
      // Update the user's status
      await user.findOneAndUpdate(
        { username },
        { status: "1" }
      );
    }

    res.json(updatedPin);
  } catch (error) {
    console.error("Error updating pin:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


app.get("/getgallery", async (req, res) => {
  let data = await gallery.find();
  res.send(data);
});

app.get("/viewgallery", async (req, res) => {
  try {
    const images = await gallery.find();
    res.json(images);
  } catch (error) {
    console.error("Error fetching images from gallery:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
app.delete("/deletegallery/:id", async (req, res) => {
  try {
    const imageId = req.params.id;
    console.log("Deleting image:", imageId);
    await gallery.findByIdAndDelete(imageId);
    console.log("Image deleted.");
    res.send({ message: "Image deleted successfully" });
  } catch (error) {
    console.error("Error deleting image:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

app.post("/login", async (req, res) => {
  console.log("Login");
  if (req.body.username && req.body.password) {
    try {
      const data = await user.findOne({ username: req.body.username, password: req.body.password }).select("-password");
      if (data) {
        res.send(data);
      } else {
        res.send("Username and Password do not match");
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  } else {
    res.send("Provide both username and password");
  }
});

app.delete("/deleteuser/:id", async (req, res) => {
  let data = await user.deleteOne({_id: req.params.id });
  res.send(data);
});


app.post("/feedback", async (req, res) => {
  let result = new feedback(req.body);
  let data = await result.save();
  res.send(data);
});

app.post("/adminlogin", async (req, res) => {
  if (req.body.username && req.body.password) {
    let data = await admin.findOne(req.body).select("-password");
    if (data) {
      res.send(data);
    } else {
      res.send("Username and Password no matched");
    }
  } else {
    res.send("Provide both username and password");
  }
});

app.get("/viewfeedback", async (req, res) => {
  let data = await feedback.find();
  res.send(data);
});

app.delete("/deletefeedback/:id", async (req, res) => {
  let data = await feedback.deleteOne({ _id: req.params.id });
  res.send(data);
});

app.post("/addroom", async (req, res) => {
  let result = new room(req.body);
  let data = await result.save();
  res.send(data);
});

// app.get("/getroom/:username", async (req, res) => {
//   let data = await room.find();
//   res.send(data);
// });

app.get("/getroom/:username", async (req, res) => {
  try {
    const username = req.params.username;
    const data = await room.find({ username });
    res.json(data);
  } catch (error) {
    console.error("Error fetching room data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/getdetailsroom/:id", async (req, res) => {
    let data = await room.find();
    res.send(data);
  });
app.delete("/deleteroom/:id", async (req, res) => {
  let data = await room.deleteOne({ _id: req.params.id });
  res.send(data);
});

app.get("/editroom/:id", async (req, res) => {
  let data = await room.findOne({ _id: req.params.id });
  res.send(data);
});
app.put("/updateuser/:email", async (req, res) => {
  const userEmail = req.params.email;
  const updatedUserData = req.body;

  try {
    // Find the user by email and update their details
    const updatedUser = await user.findOneAndUpdate(
      { email: userEmail },
      { $set: updatedUserData },
      { new: true }
    );

    if (updatedUser) {
      res.status(200).json(updatedUser); // Send updated user data back to client
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.put("/updateroom/:id", async (req, res) => {
  let data = await room.updateOne({ _id: req.params.id }, { $set: req.body });
  res.send(data);
});

app.get("/viewusers", async (req, res) => {
  let data = await user.find();
  res.send(data);
});

app.delete("/deleteuser/:id", async (req, res) => {
  let data = await user.deleteOne({ _id: req.params.id });
  res.send(data);
});

app.post("/booking", async (req, res) => {
  let result = new booking(req.body);
  let data = await result.save();
  res.send(data);
});

app.get("/userbooking/:email", async (req, res) => {
  let data = await booking.find({ email: req.params.email });
  res.send(data);
});

app.get("/bookings", async (req, res) => {
  let data = await booking.find();
  res.send(data);
});

app.delete("/deletebooking/:id", async (req, res) => {
  let data = await booking.deleteOne({ _id: req.params.id });
  res.send(data);
});

app.get("/editbooking/:id", async (req, res) => {
  let data = await booking.findOne({ _id: req.params.id });
  res.send(data);
});

app.put("/updatebooking/:id", async (req, res) => {
  let data = await booking.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  res.send(data);
});

app.get("/searchbooking/:key", async (req, res) => {
  let result = await booking.find({
    $or: [
      { email: { $regex: req.params.key, $options: "i" } },
      { bookingdate: { $regex: req.params.key, $options: "i" } },
      { name: { $regex: req.params.key, $options: "i" } },
    ],
  });
  res.send(result);
});

app.get("/searchroom/:key", async (req, res) => {
  let result = await room.find({
    $or: [{ type: { $regex: req.params.key, $options: "i" } }],
  });
  res.send(result);
});

//$options: 'i' :- is use to remove case sensitive search.

app.listen(4500);
