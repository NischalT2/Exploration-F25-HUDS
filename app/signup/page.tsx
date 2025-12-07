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

            <p>House/Dorm:</p>
            <select className="textbox" name="house" required>
                <option value="">Select a House or Dorm</option>
                {/* Upperclassman Houses */}
                <option disabled>--- Upperclassman Houses ---</option>
                <option>Adams</option>
                <option>Cabot</option>
                <option>Currier</option>
                <option>Dunster</option>
                <option>Eliot</option>
                <option>Kirkland</option>
                <option>Leverett</option>
                <option>Lowell</option>
                <option>Mather</option>
                <option>Pforzheimer</option>
                <option>Quincy</option>
                <option>Winthrop</option>

                {/* Freshman Dorms */}
                <option disabled>--- Freshman Dorms ---</option>
                <option>Apley Court</option>
                <option>Canaday</option>
                <option>Grays</option>
                <option>Greenough</option>
                <option>Hollis</option>
                <option>Holworthy</option>
                <option>Hurlbut</option>
                <option>Lionel</option>
                <option>Massachusetts Hall</option>
                <option>Matthews</option>
                <option>Mower</option>
                <option>Pennypacker</option>
                <option>Stoughton</option>
                <option>Straus</option>
                <option>Thayer</option>
                <option>Weld</option>
                <option>Wigglesworth</option>
            </select>


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