import Table from "../Table";
import Paper from "../Table/Paper";
import Stack from "../Table/Stack";
import TableRow from "../Table/TableRow";
import Button from "../../customs/Button";
import ErrorMessage from "../ErrorMessage";
import TableHead from "../Table/TableHead";
import TableBody from "../Table/TableBody";
import Autocomplete from "../Table/Autocomplete";
import TableBodyCell from "../Table/TableBodyCell";
import TableHeadCell from "../Table/TableHeadCell";
import ComponentLoading from "../ComponentLoading";
import TableContainer from "../Table/TableContainer";
import TablePagination from "../Table/TablePagination";
import useAccountsList from "../../hooks/useAccountsList";
import defaultAvatar from "../../images/profile_image.png";
import { MdModeEditOutline, MdDelete } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { columns } from "./columns";
import s from "./styles.module.scss";

function AccountsList() {
  const {
    page,
    rows,
    error,
    loading,
    rowsPerPage,
    allUsersSize,
    searchedUser,
    filterData,
    deleteUser,
    handleChangePage,
    handleSearchedUser,
    handleChangeRowsPerPage,
  } = useAccountsList();

  return (
    <Paper className={s.paper}>
      <Stack className={s.searchAndAdd}>
        <Autocomplete
          className={s.autocomplete}
          options={rows}
          searchedUser={searchedUser}
          placeholder={"Search user"}
          onChange={(e, v) => filterData(v)}
          handleSearchedUser={handleSearchedUser}
          getOptionLabel={(row) => row.displayName || ""}
        />
        <Button className={s.addButton}>
          <AiOutlinePlus />Add
        </Button>
      </Stack>
      {loading ? (
        <Stack className={s.flex}>
          <ComponentLoading />
        </Stack>
      ) : error ? (
        <Stack className={s.flex}>
          <ErrorMessage
            error={error}
            color={"#ffffff7e"}
            fontSize={20}
          />
        </Stack>
      ) : (
        <TableContainer className={s.tableContainer}>
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
                  <TableBodyCell data-label={columns[0].title}>
                    {index + 1}
                  </TableBodyCell>
                  <TableBodyCell data-label={columns[1].title} className={s.userBlock}>
                    <div
                      className={s.avatar}
                      style={{ backgroundImage: `url(${row.photoURL || defaultAvatar})` }}
                    ></div>
                    {row.displayName}
                  </TableBodyCell>
                  <TableBodyCell data-label={columns[2].title}>
                    {row.email}
                  </TableBodyCell>
                  <TableBodyCell data-label={columns[3].title}>
                    <Stack className={s.actions}>
                      <MdModeEditOutline />
                      <MdDelete onClick={() => deleteUser(row.id)} />
                    </Stack>
                  </TableBodyCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )
      }
      <TablePagination
        className={s.tablePagination}
        page={page}
        count={allUsersSize}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default AccountsList;