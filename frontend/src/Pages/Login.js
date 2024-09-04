import React, { useState } from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import { useNavigate } from "react-router";
import loginBackground from "../Images/homeimg.jpg"; 
import loginBackground2 from "../Images/login2.jpg";
import HeroPage from "./HeroPage";

const headerText = "Login"; 

const Login = () => {
  let navigate = useNavigate();
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();
    try {
      let result = await fetch(`http://localhost:4500/login`, {
        method: "post",
        body: JSON.stringify({ username, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      result = await result.json();
      if (result.username) {
        localStorage.setItem("user", JSON.stringify(result));
        localStorage.setItem("username", result.username); 

        if (result.authority === "admin") {
          navigate("/dashboard"); 
        } else if (result.authority === "Customer") {
          navigate("/homepage");
        } else if (result.authority === "superadmin") {
          navigate("/dashboard");
        }
      }
    } catch {
      alert("Username and Password do not match");
    }
  };

  return (
    <>
      <Header />
      <HeroPage imageUrl={loginBackground} headerText={headerText} />{" "}
      <div
        className="login-container"
        style={{ backgroundImage: `url(${loginBackground2})` }}
      >
        <div className="row m-auto justify-content-center login-base">
          <div className="col-9 login-main mt-5 mb-5 p-5">
            <form onSubmit={login}>
              <input
                type="text"
                className="mt-3"
                name="username"
                placeholder="Write Username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                required
              />
              <input
                type="password"
                className="mt-3"
                name="pswd"
                placeholder="Write Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
              <button type="submit" className="mt-3">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
