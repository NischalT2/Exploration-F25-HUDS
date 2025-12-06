import React from "react";
import Link from "next/link";

export default function Signup() {
    return (




        <>
            <div className="flex flex-row">
                <p> Don&apos;t have an account?&nbsp; </p>
                <Link href="/login"><button> Signup </button></Link>
            </div>
        </>
    )
}