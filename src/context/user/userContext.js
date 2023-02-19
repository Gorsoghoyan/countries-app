import {
  confirmPasswordReset,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useState } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, fs } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { userLogin, userLogout } from "../../redux/slices/user/userSlice";

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

  // Add sub user
  const addSubUser = async (data) => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      await setDoc(doc(fs, "subUsers", userCredential.user.uid), {
        ...data,
      });
      setError("");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <UserContext.Provider
      value={{
        error,
        loading,
        reset,
        addSubUser,
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
