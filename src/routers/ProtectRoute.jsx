import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const [isAuth, setIsAuth] = useState(null); // null means checking, false means not authenticated, true means authenticated
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    // Assuming that `user` being `null` or `undefined` indicates not authenticated
    if (user) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [user]); // Only run when `user` changes

  if (isAuth === null) {
    // Optionally handle loading state (e.g., display a spinner)
    return <div>Loading...</div>;
  }

  return isAuth ? <Navigate to="/" replace /> : children;
};

export default PrivateRoute;
