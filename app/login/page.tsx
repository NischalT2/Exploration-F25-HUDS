import React from "react";
import Link from "next/link";
import "../styles.css";

export default function Login() {
  return (
    <div className="background">
      <div className="container">

        <p className="login-title">HUDS Login</p>

        <form action="/dashboard">
            <p>Email:</p>
            <input type="email" className="textbox" name="email" required />

            <p>Password:</p>
            <input type="password" className="textbox" name="password" required />

            <p>
                <button type="submit" className="login-btn">Login</button>
            </p>
        </form>
        <Link href="/signup">
            <button className="manuever-btn">Sign Up?</button>
        </Link>

      </div>
    </div>
  );
}
