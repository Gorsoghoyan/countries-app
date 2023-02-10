import s from "./styles.module.scss";
import c from "classnames";

function TableBodyCell(props) {

  return (
    <td className={s.tableBodyCell} {...props}>
      {props.children}
    </td>
  );
}

export default TableBodyCell;