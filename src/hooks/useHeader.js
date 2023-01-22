import { useState } from "react";
import useClickOutside from "./useClickOutside";

const useHeader = () => {
    const [ open, setOpen ] = useState(false);

    const clickRef = useClickOutside(() => {
        closeDropDown();
    });

    function closeDropDown () {
        open && setOpen(false);
    }
    
    const handleClick = () => {
        !open && setOpen(true);
    };

    return {
        open,
        clickRef,
        closeDropDown,
        handleClick
    };
};

export default useHeader;