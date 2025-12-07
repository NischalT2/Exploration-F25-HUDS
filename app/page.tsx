import React from "react";
import Link from "next/link";


export default function Navbar(){

    return (
        <>
		        {/*Creates a button that says "signup" and takes you to the signup page */}
            <Link href="/signup">
                <button className = "px-2 py-2 rounded"> Signup</button> 
            </Link> 
            {/*Another example: creates a button for the home page */}
            <Link href="/">
		             <button className = "px-2 py-2 rounded"> Home</button> 
            </Link> 
        </>
    );
}
