import { AiOutlineSearch } from "react-icons/ai";
import Input from "../../customs/Input";
import Logo from "../Logo";
import s from "./styles.module.scss";

function Header () {

    return (
        <header className={s.header}>
            <Logo 
                nameFontSize={20}
                svgFontSize={28}
            />
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
            </div>
        </header>
    );
}

export default Header;