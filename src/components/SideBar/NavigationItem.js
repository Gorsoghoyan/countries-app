import { NavLink } from "react-router-dom";
import s from "./styles.module.scss";

function NavigationItem ({ title, icon, link }) {

    return (
        <NavLink 
            to={link} 
            className={({ isActive }) => isActive ? `${s.navItem} ${s.active}` : `${s.navItem}`}
        >
            {icon}
            <span>{title}</span>
        </NavLink>
    );
}

export default NavigationItem;