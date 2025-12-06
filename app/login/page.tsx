import React from "react";
import Link from "next/link";
import "../styles.css";

export default function Login() {
    return (
      <div className="login-container">
        <p className="login-title">Login</p>
  
        <p>Username </p>
        <input type="text" className="textbox" name="username" required></input>

        <p>Password </p>
        <input type="password" className="textbox" name="password" required></input>
        <p></p>
        <button className="login-btn">Login</button>

        <p></p>
        <Link href="/signup">
          <button className="signup-page-btn">Sign Up</button>
        </Link>
      </div>
    );
  }
  