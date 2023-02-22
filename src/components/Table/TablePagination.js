import SelectBox from "../SelectBox";
import Button from "../../customs/Button";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import s from "./styles.module.scss";

function TablePagination({
  className,
  page,
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
      <p className={s.infoPart}>
        {page * rowsPerPage - rowsPerPage + 1}
        <span>-</span>
        {page * rowsPerPage > count ? count : page * rowsPerPage}
        <span>of</span>{count}
      </p>
      <div className={s.arrowsPart}>
        <Button
          onClick={(e) => onPageChange("prev")}
          disabled={page === 1 || count < rowsPerPage}
        >
          <IoIosArrowBack />
        </Button>
        <Button
          onClick={(e) => onPageChange("next")}
          disabled={page * rowsPerPage >= count || count < rowsPerPage}
        >
          <IoIosArrowForward />
        </Button>
      </div>
    </div>
  );
}

export default TablePagination;