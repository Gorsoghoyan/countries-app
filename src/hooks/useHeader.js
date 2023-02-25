import { useEffect, useRef, useState } from "react";
import { changeValue, selectInput } from "../redux/slices/search/searchInputSlice";
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
  const { location, placeholder, value } = useSelector(selectInput);
  const sideBarOpen = useSelector(selectSideBarOpen);
  const inputRef = useRef(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    inputRef.current.value = value;
  }, [value]);

  const clickRef = useClickOutside(() => {
    closeDropDown();
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!location) return;
    if (!inputRef.current.value) return;
    dispatch(changeValue(inputRef.current.value));
  };

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
    inputRef,
    placeholder,
    handleClick,
    handleSubmit,
    closeDropDown,
    navigateHomePage,
    handleUserLogout,
    handleToggleSideBar,
  };
};

export default useHeader;
