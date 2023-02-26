import { Link } from "react-router-dom";
import s from "./styles.module.scss";

function PageTopPart({ title, button, btnText, path, btnBackground, btnBorder }) {
  return (
    <div className={s.container}>
      <h2>{title}</h2>
      {button && (
        <Link 
          className={s.btnWrapper} 
          style={{ background: btnBackground, border: btnBorder }} 
          to={path}
        >
          {btnText}
        </Link>
      )}
    </div>
  );
}

export default PageTopPart;
