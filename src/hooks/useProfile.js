import useUserContext from "./useUserContext";

const useProfile = () => {
    const { user } = useUserContext();

    return {
        user,
    };  
};

export default useProfile;