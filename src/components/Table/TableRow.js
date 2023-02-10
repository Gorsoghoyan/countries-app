import s from "./styles.module.scss";

function TableRow(props) {

  return (
    <tr className={s.tableRow}>
      {props.children}
    </tr>
  );
}

export default TableRow;