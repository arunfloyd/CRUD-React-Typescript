import React, { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import axios  from "axios";
import Header from "./Header";
import { useDispatch } from "react-redux";
import userDetails from "../utils/userSlice";


const Login = () => {
  const name = useRef<HTMLInputElement>(null);
  const emails = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const [isSignInForm, setIsSignInForm] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleButtonClick = async () => {
    const message: string | null = checkValidData(
      emails.current?.value || "",
      password.current?.value || ""
      // name.current?.value || ""
    );
    setErrorMessage(message);

    if (message) return;
    if (!isSignInForm) {
      try {
        const response = await axios.post(
          "http://localhost:8080/auth/register",
          {
            username: name.current?.value,
            email: emails.current?.value,
            password: password.current?.value,
          }
        );

        console.log(response);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const response = await axios.post(
          "http://localhost:8080/auth/login",
          {
            email: emails.current?.value,
            password: password.current?.value,
          }
        );
console.log(response.data.user)
       // @ts-ignore

        dispatch(userDetails(response.data.user));
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div>
      <Header />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700 bg-opacity-50"
          />
        )}
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
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New in Town ? Sign Up"
            : "Already a User ? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
