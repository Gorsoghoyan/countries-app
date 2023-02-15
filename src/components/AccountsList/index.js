import Table from "../Table";
import Stack from "../Table/Stack";
import TableRow from "../Table/TableRow";
import Button from "../../customs/Button";
import TableHead from "../Table/TableHead";
import TableBody from "../Table/TableBody";
import Autocomplete from "../Table/Autocomplete";
import TableBodyCell from "../Table/TableBodyCell";
import TableHeadCell from "../Table/TableHeadCell";
import TableContainer from "../Table/TableContainer";
import TablePagination from "../Table/TablePagination";
import useAccountsList from "../../hooks/useAccountsList";
import { MdModeEditOutline, MdDelete } from "react-icons/md";
import { columns } from "./columns";
import s from "./styles.module.scss";

const rows = [
  { name: "Gor Soghoyan", email: "soghoyangor99@gmail.com", id: Math.random(), },
  { name: "Gor Soghoyan", email: "soghoyangor99@gmail.com", id: Math.random(), },
  { name: "Gor Soghoyan", email: "soghoyangor99@gmail.com", id: Math.random(), },
  { name: "Gor Soghoyan", email: "soghoyangor99@gmail.com", id: Math.random(), },
  { name: "Gor Soghoyan", email: "soghoyangor99@gmail.com", id: Math.random(), },
  { name: "Gor Soghoyan", email: "soghoyangor99@gmail.com", id: Math.random(), },
  { name: "Gor Soghoyan", email: "soghoyangor99@gmail.com", id: Math.random(), },
  { name: "Gor Soghoyan", email: "soghoyangor99@gmail.com", id: Math.random(), },
];

function AccountsList() {
  const { 
    rows, 
    page, 
    rowsPerPage, 
    filterData, 
    handleChangePage, 
    handleChangeRowsPerPage 
  } = useAccountsList();

  return (
    <TableContainer className={s.tableContainer}>
      <Stack className={s.searchAndAdd}>
        <Autocomplete
          options={rows}
          placeholder={"Search user"}
          onChange={(option) => filterData(option)}
          getOptionLabel={(row) => row.displayName || ""}
        />
        <Button />
      </Stack>
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
              <TableBodyCell>{row.name}</TableBodyCell>
              <TableBodyCell>{row.email}</TableBodyCell>
              <TableBodyCell>
                <Stack className={s.actions}>
                  <MdModeEditOutline />
                  <MdDelete />
                </Stack>
              </TableBodyCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
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