import React, { useState } from "react";
import { useNavigate } from "react-router";
import Header from "../Common/Header";
import loginBackground from "../Images/signup7.jpg";
import HeroPage from "./HeroPage";
import Footer from "../Common/Footer";
import loginBackground2 from "../Images/homeimg.jpg";
import { Alert } from "react-bootstrap";

const headerText = "Sign Up";

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [authority, setAuthority] = useState("Customer");
  const [error, setError] = useState(null);

  const register = async (e) => {
    e.preventDefault();
    console.log(username, email, contact, password, authority);

    // Validate username
    if (username.length < 5 || /^\d+$/.test(username)) {
      setError(
        "Username should have at least 5 characters and not only digits"
      );
      return;
    }

    // Validate password
    if (
      !/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/.test(
        password
      )
    ) {
      setError(
        "Password should have at least 8 characters, one letter, one digit, and one special symbol"
      );
      return;
    }

    // Check if username already exists
    try {
      const response = await fetch(`http://localhost:4500/checkusername`, {
        method: "post",
        body: JSON.stringify({ username }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (data.exists) {
        setError("Username already exists");
        return;
      }
    } catch (error) {
      console.error("Error checking username:", error);
    }

    // Check if email already exists
    try {
      const response = await fetch(`http://localhost:4500/checkemail`, {
        method: "post",
        body: JSON.stringify({ email }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (data.exists) {
        setError("Email already exists");
        return;
      }
    } catch (error) {
      console.error("Error checking email:", error);
    }

    // Register user
    try {
      const result = await fetch(`http://localhost:4500/signup`, {
        method: "post",
        body: JSON.stringify({ username, email, contact, password, authority }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const registrationResult = await result.json();
      if (registrationResult) {
        // Store user data in localStorage
        localStorage.setItem("user", JSON.stringify(registrationResult));
        localStorage.setItem("email", registrationResult.email);
        alert("Registration Successful");
        if (authority === "admin") {
          navigate("/accountdetails");
        } else {
          navigate("/login");
        }
      } else {
        alert("Something went wrong...");
      }
    } catch (error) {
      console.error("Error in fetch:", error);
      alert("An error occurred while registering. Please try again later.");
    }
  };

  return (
    <>
      <div className="fluid">
        <Header />
        <HeroPage imageUrl={loginBackground2} headerText={headerText} />{" "}
        <div
          className="login-container"
          style={{ backgroundImage: `url(${loginBackground})`, width: "100%" }}
        >
          <div style={{ height: "200px" }} />
          <div className="login-main mt-5 mb-5">
            {error && (
              <Alert variant="danger" className="alert-right">
                {error}
              </Alert>
            )}
            <form onSubmit={register}>
              <input
                type="text"
                placeholder="Enter your username"
                className="form-control mt-2"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                required
              />
              <input
                type="email"
                placeholder="Enter your Email"
                className="form-control mt-2"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
              <input
                type="number"
                placeholder="Enter your Contact"
                className="form-control mt-2"
                onChange={(e) => setContact(e.target.value)}
                value={contact}
                required
              />
              <input
                type="password"
                placeholder="Enter your Password"
                className="mt-2"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
              <div className="mt-2">
                <label style={{ color: "white" }}>
                  <input
                    type="radio"
                    name="authority"
                    value="admin"
                    onChange={(e) => setAuthority(e.target.value)}
                  />
                  Hotel Owner
                </label>
                <label style={{ color: "white" }}>
                  <input
                    type="radio"
                    name="authority"
                    value="customer"
                    onChange={(e) => setAuthority(e.target.value)}
                    defaultChecked
                  />
                  Customer
                </label>
              </div>
              <button className="btn btn-primary mt-2" type="submit">
                Signup
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Signup;
