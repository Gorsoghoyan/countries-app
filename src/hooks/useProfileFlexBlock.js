import { useEffect, useState } from "react";
import defaultProfileImage from "../images/profile_image.png";
import useUserContext from "./useUserContext";

const useProfileFlexBlock = () => {
    const [ photoURL, setPhotoURL ] = useState(defaultProfileImage);
    const { user } = useUserContext();

    useEffect(() => {
        user?.photoURL && setPhotoURL(user.photoURL);
    }, [ user ]);

    return {
        photoURL,
        user
    };
};

export default useProfileFlexBlock;