import Header from "./Header";

const users = [
  { id: 1, name: "Arun", email: "arun@example.com" },
  { id: 2, name: "Vinod", email: "vinod@example.com" },
];

const AdminDashBoard = () => {
  return (
    <div>
      <Header />
      <h1 className="font-bold text-3xl py-4 text-center text-white underline">
        WELCOME TO ADMIN DASHBOARD
      </h1>
      <h3 className="text-lg font-semibold text-center mt-6 mb-4 te">
        Recently Joined Users
      </h3>
      <div className="flex flex-wrap justify-center items-center">
        {users.map((user) => (
          <div
            key={user.id}
            className="border-2 border-gray-300 bg-gray-800 text-white p-4 flex flex-col items-center m-4 rounded-lg"
          >
            <img
              className="border-2 w-64 h-64 mb-5 rounded-full"
              src=""
              alt="user-profile"
            />
            <h2 className="my-2 text-xl">User Name: {user.name}</h2>
            <h2 className="my-2 text-xl">Email: {user.email}</h2>
            <button className="bg-green-500 text-white px-5 py-2 rounded cursor-pointer mt-5 hover:bg-green-600">
              Update Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashBoard;
