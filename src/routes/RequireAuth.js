import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectCurrentUser } from "../redux/slices/user/userSlice";

const RequireAuth = () => {
  const currentUser = useSelector(selectCurrentUser);

  return currentUser ? (
    <Navigate to="/admin/dashboard" />
  ) : (
    <Navigate to="/user/login" />
  );
};

export default RequireAuth;
