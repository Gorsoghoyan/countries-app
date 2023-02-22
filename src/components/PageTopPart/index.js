import { Link } from "react-router-dom";
import s from "./styles.module.scss";

function PageTopPart({ title, button, btnText, path }) {
  return (
    <div className={s.container}>
      <h2>{title}</h2>
      {button && (
        <Link className={s.btnWrapper} to={path}>
          {btnText}
        </Link>
      )}
    </div>
  );
}

export default PageTopPart;
