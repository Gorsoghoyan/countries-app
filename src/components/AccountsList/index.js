import Table from "../Table";
import Stack from "../Table/Stack";
import TableRow from "../Table/TableRow";
import Button from "../../customs/Button";
import TableHead from "../Table/TableHead";
import TableBody from "../Table/TableBody";
import Autocomplete from "../Table/Autocomplete";
import TableBodyCell from "../Table/TableBodyCell";
import TableHeadCell from "../Table/TableHeadCell";
import ComponentLoading from "../ComponentLoading";
import TableContainer from "../Table/TableContainer";
import TablePagination from "../Table/TablePagination";
import useAccountsList from "../../hooks/useAccountsList";
import { MdModeEditOutline, MdDelete } from "react-icons/md";
import { columns } from "./columns";
import s from "./styles.module.scss";
import ErrorMessage from "../ErrorMessage";

function AccountsList() {
  const {
    page,
    rows,
    error,
    loading,
    rowsPerPage,
    filterData,
    deleteUser,
    handleChangePage,
    handleChangeRowsPerPage,
  } = useAccountsList();

  return (
    <TableContainer className={s.tableContainer}>
      <Stack className={s.searchAndAdd}>
        <Autocomplete
          className={s.autocomplete}
          options={rows}
          placeholder={"Search user"}
          onChange={(e, v) => filterData(v)}
          getOptionLabel={(row) => row.displayName || ""}
        />
        <Button />
      </Stack>
      {loading ? 
        <Stack className={s.loading}>
          <ComponentLoading />
        </Stack> : error ? 
        <ErrorMessage error={error} /> :
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableHeadCell key={column.id}>
                  {column.title}
                </TableHeadCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={row.id}>
                <TableBodyCell>{index + 1}</TableBodyCell>
                <TableBodyCell>{row.displayName}</TableBodyCell>
                <TableBodyCell>{row.email}</TableBodyCell>
                <TableBodyCell>
                  <Stack className={s.actions}>
                    <MdModeEditOutline />
                    <MdDelete onClick={() => deleteUser(row.id)} />
                  </Stack>
                </TableBodyCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      }
      <TablePagination
        className={s.tablePagination}
        page={page}
        count={rows.length}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 15, 30]}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
}

export default AccountsList;