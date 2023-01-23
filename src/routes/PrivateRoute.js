import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import useUserContext from "../hooks/useUserContext";
import Error from "../pages/Error";

const PrivateRoute = () => {
    const { user } = useUserContext();

    if (user === 0) return;
     
    return user ? <>
        <Header />
        <SideBar />
        <Outlet />
    </> : <Error />
};

export default PrivateRoute;