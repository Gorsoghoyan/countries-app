import useCurrentUser from "./useCurrentUser";

const useProfile = () => {
    const currentUser = useCurrentUser();

    return {
        currentUser,
    };  
};

export default useProfile;