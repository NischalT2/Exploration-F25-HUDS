import React from "react";
import Link from "next/link";
import "../styles.css";

export default function Login() {
  return (
    <div className="background">
      <div className="container">

        <p className="login-title">HUDS Login</p>

        <p>Username:</p>
        <input type="text" className="textbox" name="username" required />

        <p>Password:</p>
        <input type="password" className="textbox" name="password" required />

        <button className="login-btn">Login</button>

        <Link href="/signup">
          <button className="signup-page-btn">Sign Up?</button>
        </Link>

      </div>
    </div>
  );
}
