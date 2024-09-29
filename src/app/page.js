"use client";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "./lib/firebase";
import { redirect, useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter(); // Next.js router for redirection

  // Listen for auth state changes and persist login
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user); // If user is logged in, set the user state
        router.push("/home"); // Redirect to the home page if logged in
      } else {
        router.push("/signup"); // Redirect to login page if not logged in
      }
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, [router]);

  return (
    <div className="container text-center	">
      <h1>Welcome to Chat Application</h1>
    </div>
  );
}
