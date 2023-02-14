
function TableHeadCell(props) {
  return (
    <th {...props}>
      {props.children}
    </th>
  );
}

export default TableHeadCell;