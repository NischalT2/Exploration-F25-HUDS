"use client";
import React from "react";
import Link from "next/link";
import "../styles.css";

import { useSearchParams } from "next/navigation";

export default function Dashboard() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");

  return (
    <div className="background">
      <div className="container">
        <p className="title">Welcome!</p>

        <p>
          You are now logged in{ name ? `, ${name}` : "" }.
        </p>

        <Link href="/login">
          <button className="manuever-btn">Log out?</button>
        </Link>
      </div>
    </div>
  );
}