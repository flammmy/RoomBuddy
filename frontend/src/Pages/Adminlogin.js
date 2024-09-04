// Adminlogin.js
import React, { useState } from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import { useNavigate } from "react-router";
import imgbackground from "../Images/homeimg.jpg";
import admin from "../Images/admin.jpg"; // Import login background image


import "./Login.css"; // Import Login.css
import HeroPage from "./HeroPage";

const Adminlogin = () => {
    const headerText = "Admin Login"; // Set the desired header text

    let navigate = useNavigate();
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");

    let login = async () => {
        try {
            let result = await fetch(`http://localhost:4500/adminlogin`, {
                method: 'post',
                body: JSON.stringify({ username, password }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            result = await result.json();
            console.log(result);
            if (result.username) {
                localStorage.setItem('admin', JSON.stringify(result));
                navigate('/superadminhome');
            }
        } catch {
            alert("Enter valid Username and Password");
        }
    }

    return (
        <>
            <Header />
            <HeroPage imageUrl={imgbackground} headerText={headerText} />

            <div
        className="login-container"
        style={{ backgroundImage: `url(${admin})` }}
      >
                <div className="row m-auto justify-content-center login-base ">
                    <div className="col-9 login-main mt-5 mb-5">
                        <h2 align="center">Admin Login</h2>
                        <input type="text" name="username" placeholder="Write Username"
                            onChange={(e) => setUsername(e.target.value)} value={username} required />
                        <input type="password" name="pswd" placeholder="Write Password"
                            onChange={(e) => setPassword(e.target.value)} value={password} required />
                        <button type="submit" onClick={login}>Login</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Adminlogin;
