import { useSelector } from "react-redux";
import { selectCurrentUser } from "../redux/slices/user/userSlice";

const useAccounts = () => {
  const currentUser = useSelector(selectCurrentUser);

  return {
    currentUser,
  };
};

export default useAccounts;
