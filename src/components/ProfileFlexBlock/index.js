import useProfileFlexBlock from "../../hooks/useProfileFlexBlock";
import { TiArrowSortedDown } from "react-icons/ti";
import s from "./styles.module.scss";
import c from "classnames";

function ProfileFlexBlock ({ flex, onClick, children, clickRef }) {
    const { photoURL, currentUser } = useProfileFlexBlock();

    return (
        <div 
            ref={clickRef} 
            onClick={onClick}
            className={c(s.container, s[flex])} 
        >
            <img src={photoURL} alt="avatar" />
            {currentUser && <p>{currentUser.displayName}</p>}
            <TiArrowSortedDown className={s.arrow} />
            {children && children}
        </div>
    );
}

export default ProfileFlexBlock;