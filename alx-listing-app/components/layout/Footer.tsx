import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center py-6 mt-10">
      <p className="text-sm text-gray-600">
        © {new Date().getFullYear()} Alx Listings App. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
