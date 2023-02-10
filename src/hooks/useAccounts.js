import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../redux/slices/user/userSlice";
import useUserContext from "./useUserContext";

const useAccounts = () => {
  const [subUsers, setSubUsers] = useState([]);
  const currentUser = useSelector(selectCurrentUser);
  const { getSubUsers, error, loading } = useUserContext();

  useEffect(() => {
    const getUsers = async () => {
      const res = await getSubUsers();
      setSubUsers(res);
    };
    getUsers();
  }, []);

  return {
    currentUser,
    subUsers,
  };
};

export default useAccounts;
