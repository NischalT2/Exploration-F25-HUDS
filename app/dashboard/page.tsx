import React from "react";
import Link from "next/link";
import "../styles.css"

export default function Dashboard() {
    return (
      <div className="background">
        <div className="container">
          <p className="title">Welcome!</p>
          <p>You are now logged in.</p>
          <Link href="/login">
            <button className="manuever-btn">Log out? </button>
            {/* Manuever button as when you click on it, it takes you back to other pages*/}
          </Link>
        </div>
      </div>
    );
  }