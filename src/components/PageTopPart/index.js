import { Link } from "react-router-dom";
import s from "./styles.module.scss";

function PageTopPart ({ title, button, btnText, path }) {

    return (
        <div className={s.container}>
            <h1>{title}</h1>
            {button && <Link to={path}>{btnText}</Link>}
        </div>
    );
}

export default PageTopPart;