import { navigationsConfig } from "./navigationsConfig";
import NavigationItem from "./NavigationItem";
import ProfileFlexBlock from "../ProfileFlexBlock";
import s from "./styles.module.scss";

function SideBar () {

    return (
        <aside className={s.sideBar}>
            <div className={s.topContainer}>
                <ProfileFlexBlock flex="column" />
            </div>
            <div className={s.navigationContainer}>
                <h3>Navigation</h3>
                {
                    navigationsConfig.map((item, index) => 
                        <NavigationItem 
                            key={index}
                            title={item.title}
                            icon={item.icon}
                            path={item.path}
                        />
                    )
                }
            </div>
        </aside>
    );
}

export default SideBar;