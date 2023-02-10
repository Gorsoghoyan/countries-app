import s from "./styles.module.scss";
import c from "classnames";

function TableHeadCell(props) {

  return (
    <th className={s.tableHeadCell} {...props}>
      {props.children}
    </th>
  );
}

export default TableHeadCell;