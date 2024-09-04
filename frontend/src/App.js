import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/about"; // Import the About component
import Contact from "./Pages/Contact"; // Import the Contact component
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Adminlogin from "./Pages/Adminlogin";
import PrivateRoute from "./Pages/PrivateRoute";
import PrivateRoute2 from "./Pages/PrivateRoute2";
import Dashboard from "./Pages/Dashboard";
import Rooms from "./Pages/Rooms";

import Feedback from "./Pages/Feedback";
import Booknow from "./Pages/Booknow";
import Adminhome from "./Pages/Adminhome";
import Users from "./Pages/Users";
import Addroom from "./Pages/Addroom";
import Viewroom from "./Pages/Viewroom";
import Editroom from "./Pages/Editroom";
import Viewbooking from "./Pages/Viewbooking";
import Viewfeedback from "./Pages/Viewfeedback";
import Editbooking from "./Pages/Editbooking";
import Userhome from "./Pages/Userhome";
import MyBooking from "./Pages/Mybooking"; // Adjusted import statement
import Header from "./Common/Header"; // Import the Header component
import HomePage from "./Pages/HomePage";
import RoomDetails from "./Pages/RoomDetails";
import Superadminhome from "./Pages/SuperAdminHome";
import Superadminusers from "./Pages/SuperAdminUsers";
import AccountDetails from "./Pages/AccountDetails";
import ViewHotels from "./Pages/ViewHotels";
import Addgallery from "./Pages/AddGallery";
import Gallery from "./Pages/Gallery";
import ViewHotelRoom from "./Pages/ViewHotelRoom";
import UsersPage from "./Pages/UsersPage";
import Generatepin from "./Pages/Generate_pin";
import TransferPin from "./Pages/TransferPin";
import MyEpin from "./Pages/MyEpin";


const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/booknow/:id" element={<Booknow />} />
          <Route path="/userhome" element={<Userhome />} />
          <Route path="/mybooking" element={<MyBooking />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/adminhome" element={<Adminhome />} />
          <Route path="/mybooking" element={<MyBooking />} />
          <Route path="/users" element={<Users />} />
          <Route path="/viewroom" element={<Viewroom />} />
          <Route path="/addroom" element={<Addroom />} />
          <Route path="/viewfeedback" element={<Viewfeedback />} />
          <Route path="/viewbooking" element={<Viewbooking />} />
          <Route path="/viewhotels" element={<ViewHotels />} />
          <Route path="/editroom/:id" element={<Editroom />} />
          <Route path="/editbooking/:id" element={<Editbooking />} />
          <Route path="/addgallery" element={<Addgallery />} />
          <Route path="/gallery" element={<Gallery />} />
          {/* <Route path="/roomdetails/:hotelId" elementt={<RoomDetails/>} /> */}
          <Route path="/viewhotelroom" element={<ViewHotelRoom />} />
          <Route path="/userspage" element={<UsersPage/>} />
          <Route path="/roomdetails/:id" element={<RoomDetails />} />
          <Route path="/accountdetails" element={<AccountDetails />} />
          <Route path="/generatepin" element={<Generatepin/>} />
          <Route path="/transferpin" element={<TransferPin/>} />
          <Route path="/myepin" element={<MyEpin/>} />
        </Route>
        <Route element={<PrivateRoute2 />}>
          <Route path="/superadminhome" element={<Superadminhome />} />
          <Route path="/Superadminusers" element={<Superadminusers />} />
          

          <Route path="/users" element={<Users />} />

        </Route>
        {/* Routes with Header */}
        <Route path="/about" element={<About />} /> {/* Route for About page */}
        <Route path="/contact" element={<Contact />} />{" "}
        {/* Route for Contact page */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/adminlogin" element={<Adminlogin />} />
      </Routes>
    </div>
  );
};

export default App;
