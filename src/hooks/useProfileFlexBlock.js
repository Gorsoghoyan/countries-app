import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import defaultProfileImage from "../images/profile_image.png";
import { selectCurrentUser } from "../redux/slices/user/userSlice";

const useProfileFlexBlock = () => {
    const [ photoURL, setPhotoURL ] = useState(defaultProfileImage);
    const currentUser = useSelector(selectCurrentUser);

    useEffect(() => {
        currentUser?.photoURL && setPhotoURL(currentUser.photoURL);
    }, [ currentUser ]);

    return {
        photoURL,
        currentUser
    };
};

export default useProfileFlexBlock;