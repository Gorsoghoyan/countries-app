import { Outlet } from "react-router-dom";
import useUserContext from "../hooks/useUserContext";
import Error from "../pages/Error";

const PublicRoute = () => {
    const { user } = useUserContext();
    
    if (user === 0) return;

    return user ? <Error /> : <Outlet />;
};

export default PublicRoute;