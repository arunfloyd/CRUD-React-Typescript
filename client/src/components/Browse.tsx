import Header from "./Header";

const Browse = () => {
  return (
    <div>
      <Header />
      <h1 className="font-bold text-3xl py-4 text-center text-white underline">
        WELCOME TO DASHBOARD
      </h1>
      <div className="border-2 text-white p-4 flex flex-col items-center">
        <img className="border-2 w-64 h-64 mb-5" src="" alt="user-profile" />
        <h2 className="my-2 ">User Name: Arun Vinod K</h2>
        <h2 className="my-2">Email: 123456789</h2>
        <button className="bg-green-500 text-white px-5 py-2 rounded cursor-pointer mt-5 hover:bg-green-600">
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default Browse;
