import React, { useRef, useState } from "react";

import axios from "axios";
import Header from "./Header";

const AdminLogin = () => {
  const emails = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleButtonClick = async () => {
    try {
      const response = await axios.post("http://localhost:8080/auth/register", {
        email: emails.current?.value,
        password: password.current?.value,
      });

      console.log(response);
    } catch (error) {
      setErrorMessage(error);
      console.log(error);
    }
  };

  return (
    <div>
      <Header />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">Sign In</h1>
        <input
          ref={emails}
          type="email"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700 bg-opacity-50"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 bg-opacity-50"
        />
        <p className="text-red-600 font-bold text-lg py-2 ">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-800 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
