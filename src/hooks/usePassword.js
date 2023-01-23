import { useEffect } from "react";
import { resetPassword, forgotPassword } from "../pages/Password/passwordConfig";

const usePassword = ({ type }) => {
    const target = type === "reset" ? resetPassword : forgotPassword;

    useEffect(() => {
        console.log(target)
    }, [target])

    return {
        target,
    };
};

export default usePassword;