import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleSideBar } from "../redux/slices/sideBar/sideBarSlice";
import useClickOutside from "./useClickOutside";
import useUserContext from "./useUserContext";

const useHeader = () => {
    const [ open, setOpen ] = useState(false);
    const { logoutUser } = useUserContext();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const clickRef = useClickOutside(() => {
        closeDropDown();
    });

    function closeDropDown () {
        open && setOpen(false);
    }

    const handleUserLogout = () => {
        logoutUser();
    };

    const navigateHomePage = () => {
        navigate("/admin/dashboard");
    };
    
    const handleClick = () => {
        !open && setOpen(true);
    };

    const handleToggleSideBar = () => {
        dispatch(toggleSideBar());
    };

    return {
        open,
        clickRef,
        handleToggleSideBar,
        navigateHomePage,
        handleUserLogout,
        closeDropDown,
        handleClick
    };
};

export default useHeader;