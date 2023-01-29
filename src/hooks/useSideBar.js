import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectSideBarOpen } from "../redux/slices/sideBar/sideBarSlice";

const useSideBar = () => {
    const [ open, setOpen ] = useState(false);
    const openSideBar = useSelector(selectSideBarOpen);

    useEffect(() => {
        if (window.innerWidth > 767) return;    
        if (openSideBar) {
            setOpen(true);
        } else {
            setOpen(false); 
        }
    }, [ openSideBar ]);

    const closeSideBar = () => {
        setOpen(false);
    };

    return {
        open,
        closeSideBar
    };
};

export default useSideBar;