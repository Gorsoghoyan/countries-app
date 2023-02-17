import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { 
  selectSideBarOpen, 
  toggleSideBar 
} from "../redux/slices/sideBar/sideBarSlice";
import useClickOutside from "./useClickOutside";
import useUserContext from "./useUserContext";

const useHeader = () => {
  const [open, setOpen] = useState(false);
  const { logoutUser } = useUserContext();
  const sideBarOpen = useSelector(selectSideBarOpen);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const clickRef = useClickOutside(() => {
    closeDropDown();
  });

  function closeDropDown() {
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
    if (sideBarOpen) return;
    setTimeout(() => dispatch(toggleSideBar(true)), 0);
  };

  return {
    open,
    clickRef,
    handleToggleSideBar,
    navigateHomePage,
    handleUserLogout,
    closeDropDown,
    handleClick,
  };
};

export default useHeader;
