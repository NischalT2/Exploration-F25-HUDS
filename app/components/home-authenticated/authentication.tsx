import Navbar from "../components/navbar";
import Link from "next/link";

export default function HomeAuthenticated() {
  return (
    <>
      <Navbar isAuthenticated={true}></Navbar>
      <div className="min-h-screen bg-zinc-50 dark:bg-black">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center py-16">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Welcome back, [Username]!
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Explore What HUDS has for you. Do not forget to share your feedback!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-zinc-900 rounded-lg p-8 shadow-sm border border-zinc-200 dark:border-zinc-800 hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Explore Meals For Each House
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                Explore our collection of available houses and find your perfect home.
              </p>
              <Link
                href="/houses"
                className="inline-block text-foreground font-medium hover:underline"
              >
                View Houses →
              </Link>
            </div>
            
            <div className="bg-white dark:bg-zinc-900 rounded-lg p-8 shadow-sm border border-zinc-200 dark:border-zinc-800 hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Share Feedback
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                Your opinion matters! Help us improve by sharing your thoughts and suggestions.
              </p>
              <Link
                href="/feedback"
                className="inline-block text-foreground font-medium hover:underline"
              >
                Leave Feedback →
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

