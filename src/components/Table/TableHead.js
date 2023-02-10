import s from "./styles.module.scss";

function TableHead(props) {

  return (
    <thead className={s.tableHead}>
      {props.children}
    </thead>
  );
}

export default TableHead;