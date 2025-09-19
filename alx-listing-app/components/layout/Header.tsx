import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 shadow-md bg-white sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-blue-600">ALX Listings App</h1>
      <div className="flex-1 mx-6">
        <input
          type="text"
          placeholder="Search destinations..."
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex space-x-4">
        <button className="px-4 py-2 text-sm font-medium border rounded-lg">
          Sign In
        </button>
        <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg">
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;
