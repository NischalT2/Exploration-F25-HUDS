"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface NavbarProps {
  isAuthenticated?: boolean;
}

export default function Navbar({ isAuthenticated = false }: NavbarProps) {
  return (
    <nav className="w-full border-b-2 border-[#A51C30] bg-white dark:bg-[#0a0a0a] sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-2 group">
              {/* Harvard Shield Icon */}
              <Image 
                src="/crimson.png" 
                alt="Harvard University Shield" 
                width={40} 
                height={40}
                className="shrink-0"
                priority
              />
              <div className="flex flex-col">
                <span className="text-[#A51C30] font-bold text-lg tracking-tight">HUDS</span>
                <span className="text-[10px] text-gray-600 dark:text-gray-400 font-medium uppercase tracking-wider">
                  Harvard University
                </span>
              </div>
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            {/*Creates a button for the home page: both for authenticated and guest users */}
            <Link href={isAuthenticated ? "/home-authenticated" : "/"}>
              <button className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#A51C30] dark:hover:text-[#A51C30] transition-colors border-b-2 border-transparent hover:border-[#A51C30]">
                Home
              </button>
            </Link>
            
            {/* Show Houses and Feedback only for login users */}
            {isAuthenticated && (
              <>
                {/*Creates a button for the houses page */}
                <Link href="/houses">
                  <button className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#A51C30] dark:hover:text-[#A51C30] transition-colors border-b-2 border-transparent hover:border-[#A51C30]">
                    Houses
                  </button>
                </Link>
                {/*Creates a button for the feedback page */}
                <Link href="/feedback">
                  <button className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#A51C30] dark:hover:text-[#A51C30] transition-colors border-b-2 border-transparent hover:border-[#A51C30]">
                    Feedback
                  </button>
                </Link>
              </>
            )}
            
            {/* Show Login and Signup only for guest users */}
            {!isAuthenticated && (
              <>
                {/*Creates a button that says "login" and takes you to the login page */}
                <Link href="/login">
                  <button className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#A51C30] dark:hover:text-[#A51C30] transition-colors border-b-2 border-transparent hover:border-[#A51C30]">
                    Login
                  </button>
                </Link>
                {/*Creates a button that says "signup" and takes you to the signup page */}
                <Link href="/signup">
                  <button className="px-4 py-2 text-sm font-medium text-white bg-[#A51C30] hover:bg-[#8C1515] rounded transition-colors shadow-sm">
                    Sign Up
                  </button>
                </Link>
              </>
            )}
            
            {/* Show Logout button for authenticated users */}
            {isAuthenticated && (
              <Link href="/">
                <button className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#A51C30] dark:hover:text-[#A51C30] transition-colors border-b-2 border-transparent hover:border-[#A51C30]">
                  Logout
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

