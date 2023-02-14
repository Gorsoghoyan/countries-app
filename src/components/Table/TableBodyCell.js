
function TableBodyCell(props) {
  return (
    <td {...props}>
      {props.children}
    </td>
  );
}

export default TableBodyCell;