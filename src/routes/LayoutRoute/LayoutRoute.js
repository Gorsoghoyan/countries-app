import { Outlet } from "react-router-dom";
import s from "./styles.module.scss";

const LayoutRoute = () => {

    return (
        <div className={s.layout}>
            <Outlet />
        </div>
    );
};

export default LayoutRoute;