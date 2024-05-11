import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import axios from "axios";

const UpdateProfile = () => {
  const [file, setFile] = useState("");
  const name = useRef<HTMLInputElement>(null);
  const emails = useRef<HTMLInputElement>(null);
  const photo = useRef<HTMLInputElement>(null);
  const handleChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleButtonClick = async () => {
    const message: string | null = checkValidData(
      emails.current?.value || "",
      name.current?.value || ""
    );
    setErrorMessage(message);
    if (errorMessage) return;
    else {
      try {
        const response = await axios.post("http://localhost:8080/auth/login", {
          email: emails.current?.value,
          username: name.current?.value,
        });
        console.log(response);
      } catch (error) {
        console.log(error);
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
        <h1 className="font-bold text-3xl py-4">Update User Details</h1>

        <input
          ref={name}
          type="text"
          placeholder="Full Name"
          className="p-4 my-4 w-full bg-gray-700 bg-opacity-50"
        />

        <input
          ref={emails}
          type="email"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700 bg-opacity-50"
        />
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            UPLOAD PHOTOS *
          </label>
          <input
            ref={photo}
            type="file"
            onChange={handleChange}
            className="w-full border rounded-md focus:outline-none focus:border-blue-500"
          />
          <img src={file} />
        </div>

        <p className="text-red-600 font-bold text-lg py-2 ">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-800 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
