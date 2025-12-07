import React from "react";
import Link from "next/link";
import "../styles.css";

export default function Signup() {
  return (
    <div className="background">
      <div className="container">

        <p className="login-title">Create Account</p>

        <p>Name:</p>
        <input type="text" className="textbox" name="name" required />

        <p>Graduation Year:</p>
        <input type="text" className="textbox" name="gradYear" required />

        <p>House:</p>
        <input type="text" className="textbox" name="house" required />

        <p>Email:</p>
        <input type="email" className="textbox" name="email" required />

        <p>Password:</p>
        <input type="password" className="textbox" name="password" required />

        <button className="login-btn">Sign Up</button>

        <Link href="/login">
          <button className="signup-page-btn">Already have an account? Login</button>
        </Link>

      </div>
    </div>
  );
}