import Navbar from "../navbar";

export default function Login() {
  return (
    <>
      <Navbar isAuthenticated={false}></Navbar>
      <div>
        <h1>Login Page</h1>
      </div>
    </>
  );
}

