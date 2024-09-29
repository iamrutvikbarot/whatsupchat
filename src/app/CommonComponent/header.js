import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../lib/firebase";
import { useRouter } from "next/navigation";

function Header({ userName, value }) {
  const router = useRouter();
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.push("/signup"); // Redirect to login page
      localStorage.clear();
    } catch (error) {
      console.error("Error signing out", error);
    }
  };

  return !value ? (
    <header className="bg-gray-800 p-4 shadow-lg" style={{ height: "8%" }}>
      <nav className="text-center max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold">{userName}</h1>
      </nav>
    </header>
  ) : (
    <header className="bg-gray-800 p-4 shadow-lg" style={{ height: "8%" }}>
      <nav className="flex items-center justify-between max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold">{userName}</h1>
        <ul className="flex space-x-6">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleSignOut}
          >
            Logout
          </button>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
