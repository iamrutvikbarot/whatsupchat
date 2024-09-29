"use client";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../lib/firebase";
import { redirect, useRouter } from "next/navigation";
import Header from "../CommonComponent/header";
import Footer from "../CommonComponent/footer";
import MainComponent from "../CommonComponent/main";

function Home() {
  const router = useRouter(); // Next.js router for redirection
  // Sign in with Google
  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      localStorage.setItem("userData", JSON.stringify(result));
      router.push("/home");
    } catch (error) {
      console.error("Error signing in", error);
    }
  };

  return (
    <div className="bg-gray-900 text-gray-100 h-screen">
      <Header userName={"What's Up Chat"} />

      <MainComponent>
        <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

          {/* <!-- Sign Up Form --> */}
          <div className="text-center">
            <h1 className="mb-4">
              Hello!, Click the below button to signup on the{" "}
              <b>What's Up Chat</b> app.
            </h1>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleSignIn}
            >
              Sign in with Google
            </button>
          </div>
        </div>
      </MainComponent>

      <Footer />
    </div>
  );
}

export default Home;
