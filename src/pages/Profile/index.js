import Button from "../../customs/Button";
import useProfile from "../../hooks/useProfile";
import profilePhoto from "../../images/profile_image.png";
import s from "./styles.module.scss";

function Profile () {
    const { user } = useProfile();

    return (
        <main className={s.profile}>
            <div className={s.topContainer}>
                <div className={s.bg}>
                    <img 
                        src={user?.photoURL || profilePhoto} 
                        alt="avatar" 
                    />
                    <div className={s.textBlock}>
                        <h2>{user?.displayName}</h2>
                        <Button>Edit Photo</Button>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Profile;