import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { selectCurrentUser } from "../redux/slices/user/userSlice";
import useUserContext from "./useUserContext";
import { updateProfile } from "firebase/auth";

const useProfile = () => {
  const [photoURL, setPhotoURL] = useState("");
  const [error, setError] = useState("");
  const [perc, setPerc] = useState(null);

  const currentUser = useSelector(selectCurrentUser);
  const { uploadFile } = useUserContext();

  useEffect(() => {
    currentUser?.photoURL && setPhotoURL(currentUser.photoURL);
  }, [currentUser]);

  const handleFileChange = (file) => {
    if (file) {
      // uploadFile({
      //   file, 
      //   setPhotoURL,
      //   setPerc,
      //   setError
      // })
    }
  };

  return {
    currentUser,
    photoURL,
    handleFileChange,
  };
};

export default useProfile;
