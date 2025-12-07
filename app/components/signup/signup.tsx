import Navbar from "../navbar";

export default function Signup() {
  return (
    <>
      <Navbar isAuthenticated={false}></Navbar>
      <div className="max-w-3xl mx-auto p-6">
        <div className="flex items-center">
          <h1 className="text-2xl font-semibold">Signup Page</h1>
        </div>
      </div>
    </>
  );
}

