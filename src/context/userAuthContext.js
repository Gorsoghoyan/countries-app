import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

const UserAuthContext = createContext({});

const UserAuthContextProvider = ({ children }) => {
    const [ user, setUser ] = useState(null);
    useEffect(()=> {
        console.log(user)
    }, [user])

    const registerUser = async ({ firstName, lastName, email, password }) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            userCredential.user.displayName = `${firstName} ${lastName}`;
        } catch (error) {
            console.log(error.message);
        }
    };

    const loginUser = async ({ email, password }) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            setUser(userCredential.user)
        } catch (error) {
            console.log(error.message);
        }
    };

    const addSubUser = async ({ firstName, lastName, email, password }) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log(userCredential.user)
        } catch (error) {
            console.log(error.message)
        }
        const res = await addDoc(collection(db, "users"), {
            firstName,
            lastName,
            email,
            password
        });     
        console.log(res.id);
    };

    const contextValue = {
        user,
        registerUser,
        loginUser,
        addSubUser
    };

    return <UserAuthContext.Provider value={contextValue}>
        {children}
    </UserAuthContext.Provider>
};

export default UserAuthContextProvider;

export const useAuthContext = () => useContext(UserAuthContext);