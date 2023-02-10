import { Outlet } from "react-router-dom";
import s from "./styles.module.scss";

const LayoutRoute = () => {
  return (
    <main className={s.layout}>
      <Outlet />
    </main>
  );
};

export default LayoutRoute;
