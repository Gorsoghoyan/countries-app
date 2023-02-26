import FileUploadButton from "../../components/FileUploadButton";
import useProfile from "../../hooks/useProfile";
import profilePhoto from "../../images/profile_image.png";
import s from "./styles.module.scss";

function Profile() {
  const { currentUser, photoURL, handleFileChange } = useProfile();

  return (
    <div className={s.profile}>
      <div className={s.topContainer}>
        <div className={s.bg}>
          <img src={photoURL || profilePhoto} alt="avatar" />
          <div className={s.textBlock}>
            <h2>{currentUser?.displayName}</h2>
            <FileUploadButton 
              handleFileChange={handleFileChange}
            >
              Edit Photo
            </FileUploadButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
