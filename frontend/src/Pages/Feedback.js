import "./Feedback.css";
import Userheader from "../Common/Userheader";
import { useState } from "react";
import { useNavigate } from "react-router";
import HeroPage from "./HeroPage";
import Footer from "../Common/Footer";

const headerText = "Feedback";
const imageUrl = "https://source.unsplash.com/1920x1080/?nature";

const Feedback = () => {
  let navigate = useNavigate();
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [contact, setContact] = useState("");
  let [feedback, setFeedback] = useState("");

  let submitfeedback = async () => {
    let result = await fetch(`http://localhost:4500/feedback`, {
      method: "post",
      body: JSON.stringify({ name, email, contact, feedback }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    if (result) {
      alert("Feedback Submitted Successfully");
      navigate("/userhome");
    } else {
      alert("Something went wrong...");
    }
  };

  return (
    <div>
      <Userheader />
      <HeroPage imageUrl={imageUrl} headerText={headerText} />{" "}
      <div className="row m-auto feedback-base">
        <div className="col-md-1"></div>
        <div className="col-md-12 feedback-main">
          <h2>Feedback</h2>
          <form onSubmit={submitfeedback}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="number"
                className="form-control"
                placeholder="Enter your Contact Number"
                onChange={(e) => setContact(e.target.value)}
                value={contact}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your Feedback"
                onChange={(e) => setFeedback(e.target.value)}
                value={feedback}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Feedback;
