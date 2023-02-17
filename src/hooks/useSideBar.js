import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSideBarOpen,
  toggleSideBar,
} from "../redux/slices/sideBar/sideBarSlice";
import { selectCurrentUser } from "../redux/slices/user/userSlice";
import useClickOutside from "./useClickOutside";
import useScrollHandler from "./useScrollHandler";

const useSideBar = () => {
  const [open, setOpen] = useState(false);
  const currentUser = useSelector(selectCurrentUser);
  const openSideBar = useSelector(selectSideBarOpen);
  const clickRef = useClickOutside(handleClickRef);
  const dispatch = useDispatch();
  useScrollHandler(handleScroll);

  useEffect(() => {
    if (window.innerWidth > 767) return;
    if (openSideBar) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [openSideBar]);

  const dispatchSideBar = (toggle) => {
    dispatch(toggleSideBar(toggle));
  };

  const closeSideBar = () => {
    dispatchSideBar(false);
  };

  function handleClickRef() {
    if (!openSideBar) return;
    dispatchSideBar(false);
  }

  function handleScroll(e) {
    if (openSideBar) {
      dispatchSideBar(false);
    }
  }

  return {
    open,
    clickRef,
    currentUser,
    closeSideBar,
  };
};

export default useSideBar;
