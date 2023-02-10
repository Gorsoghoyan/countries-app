import { IoIosArrowUp } from "react-icons/io";
import useGoTopArrow from "../../hooks/useGoTopArrow";
import s from "./styles.module.scss";
import c from "classnames";

function GoTopArrow() {
  const { active, handleClick } = useGoTopArrow();

  return (
    <div
      className={c(s.container, { [s.active]: active })}
      onClick={handleClick}
    >
      <IoIosArrowUp />
    </div>
  );
}

export default GoTopArrow;
