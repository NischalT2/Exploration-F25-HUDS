import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Link href="/housemenu">
        <button
          className="
            px-6 py-3
            bg-[#A41034]        /* Harvard Crimson */
            text-white
            font-serif          /* more academic look */
            text-lg
            font-semibold
            rounded-lg
            shadow-md
            border border-[#7F0C29]
            hover:bg-[#8B0E2E]
            hover:border-[#660922]
            hover:shadow-lg
            transition
            focus:outline-none
            focus:ring-2
            focus:ring-[#A41034]/40
          "
        >
          House Menus
        </button>
      </Link>
    </div>
  );
}


{/*from before (starter code from the Exploration Notion - reference this when trying to understand the code):
        <>
            <Link href="/housemenu"> 
                <button className="border rounded text-white">House Menus</button>
            </Link>
        </>
    )
}

*/}