import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { selectCurrentUser } from "../redux/slices/user/userSlice";
import profilePhoto from "../images/profile_image.png";

const useProfile = () => {
  const [file, setFile] = useState("");
  const [photoURL, setPhotoURL] = useState(profilePhoto);
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    currentUser?.photoURL && setPhotoURL(currentUser.photoURL);
  }, [currentUser]);

  const handleFileChange = (e) => {
    e.target.files[0] && setFile(e.target.files[0]);
  };

  return {
    currentUser,
    photoURL,
    handleFileChange,
  };
};

export default useProfile;
