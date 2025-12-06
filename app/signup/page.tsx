import React from "react";
import Link from "next/link";

export default function Signup() {


    return (
        <>
            <div className="flex flex-row">
                <p>Already have an account? </p>
                <Link href="/login"><button> Login </button></Link>
            </div>
        </>
    )
}