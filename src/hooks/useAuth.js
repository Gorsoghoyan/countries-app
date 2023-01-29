import { useEffect, useState } from "react";
import { register, login } from "../pages/Auth/authConfig";
import useUserContext from "./useUserContext";

const useAuth = (type) => {
    const target = type === "login" ? login : register;

    const { registerUser, loginUser, reset, loading, error } = useUserContext();
    const [ userData, setUserData ] = useState(target.userDataConfig);

    useEffect(() => {
        reset();
    }, [ type ]);
    
    useEffect(() => {
        setUserData(target.userDataConfig);
    }, [ target ]);

    const handleUserData = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (type === "login") {
            loginUser(userData);
        } else {
            registerUser(userData);
        }
    };

    return {
        target,
        loading,
        error,
        handleUserData,
        handleSubmit
    };
};

export default useAuth;