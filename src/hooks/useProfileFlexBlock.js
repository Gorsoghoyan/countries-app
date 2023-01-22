import { useEffect, useState } from "react";
import defaultProfileImage from "../images/profile_image.png";
import useCurrentUser from "./useCurrentUser";

const useProfileFlexBlock = () => {
    const [ photoURL, setPhotoURL ] = useState(defaultProfileImage);
    const currentUser = useCurrentUser();

    useEffect(() => {
        currentUser?.photoURL && setPhotoURL(currentUser.photoURL);
    }, [ currentUser ]);

    return {
        photoURL,
        currentUser
    };
};

export default useProfileFlexBlock;