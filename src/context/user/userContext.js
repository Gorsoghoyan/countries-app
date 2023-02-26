import {
  confirmPasswordReset, createUserWithEmailAndPassword,
  sendPasswordResetEmail, signInWithEmailAndPassword,
  signOut, updateProfile,
} from "firebase/auth";
import { ref,  uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { userLogin, userLogout } from "../../redux/slices/user/userSlice";
import { createContext, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { auth, fs, storage } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

export const UserContext = createContext({});

const UserContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Reset
  const reset = () => {
    setLoading(false);
    setError(false);
  };

  // User register
  const registerUser = async ({ displayName, email, password }) => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userCredential.user, { displayName: displayName });
      setError("");
      setLoading(false);
      navigate("/user/login");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  // User login
  const loginUser = async ({ email, password }) => {
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const docSnap = await getDoc(
        doc(fs, "subUsers", userCredential.user.uid)
      );
      if (docSnap.exists()) {
        dispatch(userLogin(docSnap.data()));
      } else {
        dispatch(userLogin(userCredential.user));
      }
      setError("");
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
    dispatch(userLogout());
    navigate("/user/login");
  };

  // Forgot password
  const forgotPassword = async (email) => {
    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      setLoading(false);
      toast.success("Please check your gmail");
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  // Reset password
  const resetPassword = async (oobCode, newPassword) => {
    setLoading(true);
    try {
      await confirmPasswordReset(auth, oobCode, newPassword);
      setLoading(false);
      toast.success("Password has been changed, you can login now.");
      navigate("/user/login");
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  // Upload file
  const uploadFile = ({ file, setPerc, setError, setPhotoURL }) => {

    const name = new Date().getTime() + file.name;
    const storageRef = ref(storage, name);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed', 
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setPerc(progress);
        switch (snapshot.state) {
          case 'paused':
            break;
          case 'running':
            break;
          default : break;
        }
      }, 
      (error) => {
        setError(error);
      }, 
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setPhotoURL(downloadURL);
        });
      }
    );
  };

  return (
    <UserContext.Provider
      value={{
        error,
        loading,
        reset,
        uploadFile,
        loginUser,
        registerUser,
        logoutUser,
        forgotPassword,
        resetPassword,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
