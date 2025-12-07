import React from "react";
import Link from "next/link";
import "../styles.css";

export default function Signup() {
  return (
    <div className="background">
      <div className="container">

        <p className="login-title">Create Account</p>

        <form action="/dashboard">
            <p>Name:</p>
            <input type="text" className="textbox" name="name" required />

            <p>Graduation Year:</p>
            <select className="textbox" name="year" required>
                <option value="">Select a year</option>
                <option>2026</option>
                <option>2027</option>
                <option>2028</option>
                <option>2029</option>
            </select>

            <p>House:</p>
            <input type="text" className="textbox" name="house" required />

            <p>Email:</p>
            <input type="email" className="textbox" name="email" required />

            <p>Password:</p>
            <input type="password" className="textbox" name="password" required />
            <p>
                <button type="submit" className="login-btn">Sign Up</button>
            </p>
        </form>

        <Link href="/login">
          <button className="manuever-btn">Already have an account? Login</button>
        </Link>

      </div>
    </div>
  );
}