import SelectBox from "../SelectBox";
import Button from "../../customs/Button";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import s from "./styles.module.scss";

function TablePagination({
  className,
  page,
  rows,
  count,
  rowsPerPage,
  onPageChange,
  rowsPerPageOptions,
  onRowsPerPageChange
}) {
  return (
    <div className={className}>
      <div className={s.selectPart}>
        <span>Rows per page:</span>
        <SelectBox 
          options={rowsPerPageOptions} 
          onRowsPerPageChange={onRowsPerPageChange}
        />
      </div>
      <div className={s.infoPart}>
        <p>{}<span>-</span>{16}<span>of</span>{count}</p>
      </div>
      <div className={s.arrowsPart}>
        <Button
          onClick={(e) => onPageChange(e, rows[0], "prev")}
          // disabled={page === 0 || count < rowsPerPage}
        ><IoIosArrowBack /></Button>
        <Button
          onClick={(e) => onPageChange(e, rows[rows.length - 1], "next")}
          // disabled={page === count || count < rowsPerPage}
        ><IoIosArrowForward /></Button>
      </div>
    </div>
  );
}

export default TablePagination;