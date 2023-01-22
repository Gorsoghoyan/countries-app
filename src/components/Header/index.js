import { AiOutlineSearch } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { dropDownConfig } from "./dropDownConfig";
import ProfileFlexBlock from "../ProfileFlexBlock";
import useHeader from "../../hooks/useHeader";
import DropDownItem from "./DropDownItem";
import Input from "../../customs/Input";
import Logo from "../Logo";
import s from "./styles.module.scss";
import c from "classnames";

function Header () {
    const { open, clickRef, closeDropDown, handleClick } = useHeader();

    return (
        <header className={s.header}>
            <div className={s.leftPart}>
                <Logo nameFontSize={20} svgFontSize={28} />
                <RxHamburgerMenu 
                    className={s.burger}
                />
            </div>
            <div className={s.rightPart}>
                <form className={s.searchBlock}>
                    <Input 
                        type="search"
                        attr={{
                            type: "text",
                            placeholder: "Search..."
                        }}
                    />
                    <button className={s.iconBlock}>
                        <AiOutlineSearch />
                    </button>
                </form>
                <ProfileFlexBlock 
                    flex="row" 
                    clickRef={clickRef} 
                    onClick={handleClick}
                >
                    <div className={c(s.dropDownMenu, { [s.open]: open })}>
                        {dropDownConfig.map((item, index) => 
                            <DropDownItem 
                                key={index}
                                title={item.title}
                                path={item.path}
                                onClick={closeDropDown}
                            />
                        )}
                    </div>
                </ProfileFlexBlock>
            </div>
        </header>
    );
}

export default Header;