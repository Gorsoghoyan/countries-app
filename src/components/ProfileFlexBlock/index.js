import useProfileFlexBlock from "../../hooks/useProfileFlexBlock";
import { TiArrowSortedDown } from "react-icons/ti";
import s from "./styles.module.scss";
import c from "classnames";

function ProfileFlexBlock ({ flex, onClick, children, clickRef }) {
    const { photoURL, user } = useProfileFlexBlock();

    return (
        <div 
            ref={clickRef} 
            onClick={onClick}
            className={c(s.container, s[flex])} 
        >
            <img src={photoURL} alt="avatar" />
            {user && <p>{user.displayName}</p>}
            <TiArrowSortedDown className={s.arrow} />
            {children && children}
        </div>
    );
}

export default ProfileFlexBlock;