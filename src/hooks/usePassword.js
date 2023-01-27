import { useState } from "react";
import { resetPasswordConfig, forgotPasswordConfig } from "../pages/Password/passwordConfig";
import useQuery from "./useQuery";
import useUserContext from "./useUserContext";

const usePassword = (type) => {
    const target = type === "reset" ? resetPasswordConfig : forgotPasswordConfig;

    const query = useQuery();
    const [ value, setValue ] = useState("");   
    const { forgotPassword, resetPassword, loading } = useUserContext();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (type === "forgot") {
            forgotPassword(value);
        } else {
            resetPassword(query.get("oobCode", value));
        }

        setValue("");   
    };

    const handleSetValue = (value) => {
        setValue(value);
    };

    return {
        target,
        value,
        loading,
        handleSubmit,
        handleSetValue,
    };
};

export default usePassword;