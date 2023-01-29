import { navigationsConfig } from "./navigationsConfig";
import NavigationItem from "./NavigationItem";
import ProfileFlexBlock from "../ProfileFlexBlock";
import useSideBar from "../../hooks/useSideBar";
import s from "./styles.module.scss";
import c from "classnames";

function SideBar () {
    const { open, closeSideBar } = useSideBar();

    return (
        <aside className={c(s.sideBar, { [s.open]: open })}>
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
                            onClick={closeSideBar}
                        />
                    )
                }
            </div>
        </aside>
    );
}

export default SideBar;