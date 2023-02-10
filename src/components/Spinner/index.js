import s from "./styles.module.scss";
import c from "classnames";

function Spinner({ size, backColor, frontColor, thickness, className }) {
  return (
    <div
      className={c(s.spinner, className)}
      style={{
        width: size,
        height: size,
        border: `${thickness} solid ${backColor}`,
        borderTopColor: frontColor,
      }}
    ></div>
  );
}

export default Spinner;
