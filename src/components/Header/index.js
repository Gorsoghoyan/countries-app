import { AiOutlineSearch } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { dropDownConfig } from "./dropDownConfig";
import ProfileFlexBlock from "../ProfileFlexBlock";
import useHeader from "../../hooks/useHeader";
import DropDownItem from "./DropDownItem";
import Input from "../../customs/Input";
import Button from "../../customs/Button";
import Logo from "../Logo";
import s from "./styles.module.scss";
import c from "classnames";

function Header() {
  const {
    open,
    clickRef,
    sideBarOpen,
    handleToggleSideBar,
    navigateHomePage,
    handleUserLogout,
    closeDropDown,
    handleClick,
  } = useHeader();

  return (
    <header className={s.header}>
      <div className={c(s.leftPart, { [s.activeSideBar]: sideBarOpen })}>
        <Logo
          nameFontSize={20}
          svgFontSize={28}
          cursor={"pointer"}
          onClick={navigateHomePage}
        />
        <RxHamburgerMenu
          className={s.burger}
          onClick={() => handleToggleSideBar()}
        />
      </div>
      <div className={s.rightPart}>
        <form className={s.searchBlock}>
          <Input
            type="search"
            attr={{
              type: "text",
              placeholder: "Search...",
            }}
          />
          <Button className={s.iconBlock}>
            <AiOutlineSearch />
          </Button>
        </form>
        <ProfileFlexBlock flex="row" clickRef={clickRef} onClick={handleClick}>
          <div className={c(s.dropDownMenu, { [s.open]: open })}>
            {dropDownConfig.map((item, index) => (
              <DropDownItem
                key={index}
                title={item.title}
                path={item.path}
                onClick={() => {
                  closeDropDown();
                  if (item.type === "logout") {
                    handleUserLogout();
                  }
                }}
              />
            ))}
          </div>
        </ProfileFlexBlock>
      </div>
    </header>
  );
}

export default Header;
