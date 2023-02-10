import Input from "../../customs/Input";
import useProfile from "../../hooks/useProfile";
import s from "./styles.module.scss";

function Profile() {
  const { currentUser, photoURL, handleFileChange } = useProfile();

  return (
    <div className={s.profile}>
      <div className={s.topContainer}>
        <div className={s.bg}>
          <img src={photoURL} alt="avatar" />
          <div className={s.textBlock}>
            <h2>{currentUser?.displayName}</h2>
            <label className={s.fileUpload} style={null}>
              <Input
                attr={{
                  type: "file",
                  onChange: handleFileChange,
                }}
              />
              Edit Photo
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
