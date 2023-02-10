import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import s from "./styles.module.scss";

function GoBack({ left, top, right, bottom, color, fontSize }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div
      className={s.container}
      onClick={handleClick}
      style={{
        left,
        top,
        right,
        bottom,
        color,
        fontSize,
      }}
    >
      <IoIosArrowBack />
    </div>
  );
}

export default GoBack;
