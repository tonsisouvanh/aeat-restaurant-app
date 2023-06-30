import React from "react";

const Header = () => {
  return (
    <header className="bg-transparent px-4 py-2">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Welcome to the Dashboard</h1>
        <button className="px-4 py-2 bg-gray-800 text-white rounded-lg">
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
