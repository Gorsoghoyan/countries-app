import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSideBarOpen,
  toggleSideBar,
} from "../redux/slices/sideBar/sideBarSlice";
import { selectCurrentUser } from "../redux/slices/user/userSlice";

const useSideBar = () => {
  const [open, setOpen] = useState(false);
  const currentUser = useSelector(selectCurrentUser);
  const openSideBar = useSelector(selectSideBarOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    if (window.innerWidth > 767) return;
    if (openSideBar) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [openSideBar]);

  const closeSideBar = () => {
    dispatch(toggleSideBar());
  };

  return {
    open,
    currentUser,
    closeSideBar,
  };
};

export default useSideBar;
