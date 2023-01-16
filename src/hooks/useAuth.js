import { useEffect, useState } from "react";
import { useAuthContext } from "../context/userAuthContext";
import { register, login } from "../pages/Auth/authConfig";

const useAuth = (type) => {
    const target = type === "login" ? login : register;

    const { registerUser } = useAuthContext();
    const [ userData, setUserData ] = useState(target.userDataConfig);
    
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
            
        } else {
            registerUser(userData);
        }
    };
    
    return {
        target,
        handleUserData,
        handleSubmit
    };
};

export default useAuth;