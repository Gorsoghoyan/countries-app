import { register, login } from "../pages/Auth/authConfig";

const useAuth = (type) => {
    const target = type === "login" ? login : register;

    return {
        target,
    };
};

export default useAuth;