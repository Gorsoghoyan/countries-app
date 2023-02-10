import Spinner from "../Spinner";
import s from "./styles.module.scss";

function Loading() {
  return (
    <div className={s.loader}>
      <Spinner
        size={36}
        backColor={"#535353"}
        frontColor="#fff"
        thickness={"2px"}
      />
    </div>
  );
}

export default Loading;
