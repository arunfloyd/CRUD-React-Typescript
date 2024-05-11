import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import UpdateProfile from "./UpdateProfile";
import AdminLogin from "./AdminLogin";
import AdminDashBoard from "./AdminDashBoard";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/update",
      element: <UpdateProfile />,
    },
    {
      path: "/adminLogin",
      element: <AdminLogin />,
    },
    {
      path: "/adminDashboard",
      element: <AdminDashBoard />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
