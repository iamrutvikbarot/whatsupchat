// components/withAuth.js
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();

    useEffect(() => {
      const userData = localStorage.getItem("user");
      if (!userData) {
        // Redirect to login page if not authenticated
        router.push("/signup");
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
