import { navigationsConfig } from "./navigationsConfig";
import NavigationItem from "./NavigationItem";
import ProfileFlexBlock from "../ProfileFlexBlock";
import useSideBar from "../../hooks/useSideBar";
import s from "./styles.module.scss";
import c from "classnames";

function SideBar() {
  const { open, currentUser, closeSideBar } = useSideBar();

  return (
    <aside className={c(s.sideBar, { [s.open]: open })}>
      <div className={s.topContainer}>
        <ProfileFlexBlock flex="column" />
      </div>
      <div className={s.navigationContainer}>
        <h3>Navigation</h3>
        {navigationsConfig.map((item, index) => (
          <NavigationItem
            key={index}
            type={item.type}
            title={item.title}
            icon={item.icon}
            path={item.path}
            onClick={closeSideBar}
            currentUser={currentUser}
          />
        ))}
      </div>
    </aside>
  );
}

export default SideBar;
