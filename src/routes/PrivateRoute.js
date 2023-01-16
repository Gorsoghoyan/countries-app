import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

const PrivateRoute = () => {
    
    return <>
        <Header />
        <SideBar />
        <Outlet />
    </>;
};

export default PrivateRoute;