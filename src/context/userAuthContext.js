import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";

const UserAuthContext = createContext({});

const UserAuthContextProvider = ({ children }) => {
    const [ user, setUser ] = useState(null);
    useEffect(()=> {
        console.log(user)
    }, [user])

    const registerUser = ({ firstName, lastName, email, password}) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                user.subUsers = []
                setUser(user);
            }).catch((error) => console.log(error.message))
    };

    const contextValue = {
        user,
        registerUser
    };

    return <UserAuthContext.Provider value={contextValue}>
        {children}
    </UserAuthContext.Provider>
};

export default UserAuthContextProvider;

export const useAuthContext = () => {
    return useContext(UserAuthContext)
};