import Navbar from "./components/navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar isAuthenticated={false}></Navbar>
      <div className="min-h-screen bg-zinc-50 dark:bg-black">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center py-16">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Welcome to HUDS!
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-8">
              Please sign up or log in to access all features of the HUDS website.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/signup"
                className="px-6 py-3 rounded-lg bg-foreground text-background hover:bg-zinc-700 dark:hover:bg-zinc-300 transition-colors font-medium"
              >
                Sign Up
              </Link>
              <Link
                href="/login"
                className="px-6 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 text-foreground hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors font-medium"
              >
                Log In
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
