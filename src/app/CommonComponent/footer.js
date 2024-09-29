import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 p-4 shadow-lg" style={{ height: "13%" }}>
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-400">
          © 2024 What's Up Chat. All rights reserved by <b>Rutvik Barot</b>.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:text-blue-400">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-blue-400">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
