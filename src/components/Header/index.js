import { GiEarthAfricaEurope } from "react-icons/gi";
import { AiOutlineSearch } from "react-icons/ai";
import Input from "../../customs/Input";
import s from "./styles.module.scss";

function Header () {

    return (
        <header className={s.header}>
            <div className={s.logoPart}>
                <GiEarthAfricaEurope />
                <h1>Countries<span>Admin</span></h1>
            </div>
            <div className={s.rightPart}>
                <div className={s.searchBlock}>
                    <Input 
                        className={s.input}
                        type="text"
                        placeholder="Search..."
                    />
                    <div className={s.iconBlock}>
                        <AiOutlineSearch />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;