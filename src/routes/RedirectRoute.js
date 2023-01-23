import { Navigate } from "react-router-dom";
import useUserContext from "../hooks/useUserContext";

const RedirectRoute = () => {
    const { user } = useUserContext();

    if (user === 0) return;
    
    return user ? <Navigate to="/admin/dashboard" /> : <Navigate to="/user/login" />
};

export default RedirectRoute;