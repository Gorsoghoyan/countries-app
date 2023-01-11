import s from "./styles.module.scss";

function SideBar () {

    return (
        <aside className={s.sideBar}>
            <div className={s.topContainer}>
                <div className={s.profileInfo}>
                    <div className={s.profilePhoto}></div>
                    <p>Gor soghoyan</p>
                </div>
            </div>
        </aside>
    );
}

export default SideBar;