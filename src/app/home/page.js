"use client";
import React, { useEffect, useState } from "react";
import Header from "../CommonComponent/header";
import Footer from "../CommonComponent/footer";
import MainContent from "../CommonComponent/main";
import withAuth from "../customHooks/customHooks";

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Retrieve data from localStorage
    const userData = localStorage.getItem("userData");
    if (userData) {
      setUser(JSON.parse(userData)?.user); // Parse the JSON and set user state
    }
  }, []);

  return (
    <div className="bg-gray-900 text-gray-100 h-screen">
      <Header userName={"What's Up Chat"} value={true} />

      <MainContent>
        <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md text-center">
          <h2 className="text-2xl font-bold mb-6">User Profile</h2>
          {user ? (
            <div>
              <h3 className="text-lg mb-2">Welcome, {user.displayName}</h3>
              <img
                src={user.photoURL}
                alt={user.displayName}
                className="mx-auto rounded-full w-24 h-24 mb-4"
              />
              <p className="text-gray-400">{user.email}</p>
            </div>
          ) : (
            <p className="text-red-500">User data not found.</p>
          )}
        </div>
      </MainContent>

      <Footer />
    </div>
  );
};

export default withAuth(UserProfile);
