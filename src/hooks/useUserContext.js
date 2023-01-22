import { UserContext } from "../context/user/userContext";
import { useContext } from "react";

const useUserContext = () => useContext(UserContext);

export default useUserContext;