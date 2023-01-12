import { navigationsConfig } from "./navigationsConfig";
import NavigationItem from "./NavigationItem";
import useSideBar from "../../hooks/useSideBar";
import s from "./styles.module.scss";

function SideBar () {
    const { hovering, handleMouseOver, handleMouseOut } = useSideBar();

    return (
        <aside 
            className={s.sideBar} 
            onMouseOver={handleMouseOver} 
            onMouseOut={handleMouseOut}
        >
            <div className={s.topContainer}>
                <div className={s.profileInfo}>
                    <div className={s.profilePhoto}></div>
                    <p>Gor soghoyan</p>
                </div>
            </div>
            <div className={s.navigationContainer}>
                <h3>Navigation</h3>
                {
                    navigationsConfig.map((item, index) => 
                        <NavigationItem 
                            key={index}
                            title={item.title}
                            icon={item.icon}
                            link={item.link}
                        />
                    )
                }
            </div>
        </aside>
    );
}

export default SideBar;