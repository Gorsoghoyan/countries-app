import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";

const UserAuthContext = createContext({});

const UserAuthContextProvider = ({ children }) => {
    const [ user, setUser ] = useState(null);

    const registerUser = (email, name, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                return updateProfile(auth.currentUser, {
                    displayName: name
                })
            }).then((res) => console.log(res))
    };

    const contextValue = {
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