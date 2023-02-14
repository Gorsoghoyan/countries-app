import Select from "../../customs/Select";
import Button from "../../customs/Button";
import Option from "../../customs/Select/Option";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

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
      <div>
        <label>
          <span>Rows per page:</span>
          <Select
            onChange={onRowsPerPageChange}
            value={rowsPerPage || rowsPerPageOptions[0]}
          >
            {rowsPerPageOptions?.map((option, index) => (
              <Option key={index}>{option}</Option>
            ))}
          </Select>
        </label>
      </div>
      <div>
        <p>{}<span>-</span>{16}<span>of</span>{count}</p>
      </div>
      <div>
        <Button
          onClick={() => onPageChange()}
          disabled={page === 0 || count < rowsPerPage}
        ><IoIosArrowBack /></Button>
        <Button
          onClick={() => onPageChange()}
          disabled={page === count || count < rowsPerPage}
        ><IoIosArrowForward /></Button>
      </div>
    </div>
  );
}

export default TablePagination;