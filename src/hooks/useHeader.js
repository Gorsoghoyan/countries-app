import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useClickOutside from "./useClickOutside";
import useUserContext from "./useUserContext";

const useHeader = () => {
    const [ open, setOpen ] = useState(false);
    const { logoutUser } = useUserContext();
    const navigate = useNavigate();

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

    return {
        open,
        clickRef,
        navigateHomePage,
        handleUserLogout,
        closeDropDown,
        handleClick
    };
};

export default useHeader;