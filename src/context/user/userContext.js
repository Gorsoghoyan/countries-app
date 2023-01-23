import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { createContext, useEffect, useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { auth, db, storage } from "../../firebase";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

const UserContextProvider = ({ children }) => {
    const [ user, setUser ] = useState(0);
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(false);
            }
        });
    
        return unsubscribe;
    }, [ auth ]);

    // Reset
    const reset = () => {
        setLoading(false);
        setError(false);
    };

    // User register
    const registerUser = async ({ firstName, lastName, email, password }) => {
        setLoading(true);
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigate("/admin/dashboard");
            await updateProfile(auth.currentUser, {
                displayName: `${firstName} ${lastName}`
            });
            setError("");
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error.message);
        }
    };

    // User login
    const loginUser = async ({ email, password }) => {
        setLoading(true);
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setError("")
            setLoading(false);
            navigate("/admin/dashboard");
        } catch (error) {
            setLoading(false);
            setError(error.message);
        }
    };

    // User logout
    const logoutUser = () => {
        signOut(auth);
        navigate("/user/login");
    };

    // Forgot password
    const forgotPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    };

    // Add sub user
    const addSubUser = async (data) => {
        setLoading(true);
        try {
            const res = await createUserWithEmailAndPassword(auth, data.email, data.password);
            await setDoc(doc(db, "users", res.user.uid), {
                ...data
            });     
            setError(false);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error.message);
        }
    };

    // Files upload
    const fileUpload = ({ file }) => {
        const storageRef = ref(storage, file.name);
        const uploadTask = uploadBytesResumable(storageRef, file);
    
        uploadTask.on('state_changed', 
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                    default :
                        break;
                }
            }, 
            (error) => {
            }, 
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    
                });
            }
        );
    };

    return <UserContext.Provider value={{
        error,
        loading,
        user,
        reset,
        addSubUser,
        loginUser,
        registerUser,
        logoutUser,
        forgotPassword,
        fileUpload,
    }}>
        {children}
    </UserContext.Provider>
};

export default UserContextProvider;