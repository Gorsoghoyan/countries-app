import s from "./styles.module.scss";

function TableBody(props) {

  return (
    <tbody className={s.tableBody}>
      {props.children}
    </tbody>
  );
}

export default TableBody;