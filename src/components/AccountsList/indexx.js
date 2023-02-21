import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import useAccountsList from "../../hooks/useAccountsList";
import ComponentLoading from "../ComponentLoading";
import ErrorMessage from "../ErrorMessage";
import { Stack } from "@mui/system";
import { columns } from "./columns";
import { Autocomplete, Button, TextField, Typography } from "@mui/material";
import s from "./styles.module.scss";

const rows = [
  {id: Math.random(), email: "soghoyangor@gmail.com", password: "aosdona"},
  {id: Math.random(), email: "soghoyangor@gmail.com", password: "aosdona"},
  {id: Math.random(), email: "soghoyangor@gmail.com", password: "aosdona"},
  {id: Math.random(), email: "soghoyangor@gmail.com", password: "aosdona"},
  {id: Math.random(), email: "soghoyangor@gmail.com", password: "aosdona"},
  {id: Math.random(), email: "soghoyangor@gmail.com", password: "aosdona"},
  {id: Math.random(), email: "soghoyangor@gmail.com", password: "aosdona"},
  {id: Math.random(), email: "soghoyangor@gmail.com", password: "aosdona"},
  {id: Math.random(), email: "soghoyangor@gmail.com", password: "aosdona"},
  {id: Math.random(), email: "soghoyangor@gmail.com", password: "aosdona"},
  {id: Math.random(), email: "soghoyangor@gmail.com", password: "aosdona"},
  {id: Math.random(), email: "soghoyangor@gmail.com", password: "aosdona"},
  {id: Math.random(), email: "soghoyangor@gmail.com", password: "aosdona"},
  {id: Math.random(), email: "soghoyangor@gmail.com", password: "aosdona"},
  {id: Math.random(), email: "soghoyangor@gmail.com", password: "aosdona"},
  {id: Math.random(), email: "soghoyangor@gmail.com", password: "aosdona"},
  {id: Math.random(), email: "soghoyangor@gmail.com", password: "aosdona"},
  {id: Math.random(), email: "soghoyangor@gmail.com", password: "aosdona"},
  {id: Math.random(), email: "soghoyangor@gmail.com", password: "aosdona"},
  {id: Math.random(), email: "soghoyangor@gmail.com", password: "aosdona"},
  {id: Math.random(), email: "soghoyangor@gmail.com", password: "aosdona"},
  {id: Math.random(), email: "soghoyangor@gmail.com", password: "aosdona"},
  {id: Math.random(), email: "soghoyangor@gmail.com", password: "aosdona"},
  {id: Math.random(), email: "soghoyangor@gmail.com", password: "aosdona"},
  {id: Math.random(), email: "soghoyangor@gmail.com", password: "aosdona"},
  {id: Math.random(), email: "soghoyangor@gmail.com", password: "aosdona"},
  {id: Math.random(), email: "soghoyangor@gmail.com", password: "aosdona"},
  {id: Math.random(), email: "soghoyangor@gmail.com", password: "aosdona"},
  {id: Math.random(), email: "soghoyangor@gmail.com", password: "aosdona"},
  {id: Math.random(), email: "soghoyangor@gmail.com", password: "aosdona"},
]

function AccountsList() {
  const {
    page,
    // rows,
    rowsPerPage,
    loading,
    error,
    filterData,
    deleteUser,
    handleChangePage,
    handleChangeRowsPerPage,
  } = useAccountsList();

  if (true) {
    // return <ErrorMessage color={"white"} margin={"22% 0 0 0"} fontSize={30} />;
  }

  if (loading) {
    return <ComponentLoading className={s.loading} />;
  }

  return (
    <Paper className={s.paper} sx={{ width: "100%", overflow: "hidden" }}>
      <Stack direction="row" className={`${s.box} my-2 mb-2`}>
        <Autocomplete
          className={s.autoComplete}
          disablePortal
          id="combo-box-demo"
          options={rows}
          sx={{ width: 300 }}
          onChange={(e, v) => filterData(v)}
          getOptionLabel={(rows) => rows.displayName || ""}
          renderInput={(params) => (
            <TextField {...params} size="small" label="Search Users" />
          )}
        />
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        ></Typography>
        <Button
          className={s.btn}
          variant="contained"
          endIcon={<AddCircleIcon />}
        >
          Add
        </Button>
      </Stack>
      <TableContainer sx={{ maxHeight: 700 }}>
        <Table className={s.table} stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  style={{ maxWidth: column.maxWidth, left: column.left }}
                >
                  {column.title}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                  <TableCell align="left">{index + 1}</TableCell>
                  <TableCell align="left">
                    <img src={row.photoURL} alt="avatar" />
                    {row.displayName}
                  </TableCell>
                  <TableCell align="left">{row.email}</TableCell>
                  <TableCell align="left">
                    <Stack spacing={2} direction="row">
                      <EditIcon
                        style={{
                          fontSize: "20px",
                          color: "blue",
                          cursor: "pointer",
                        }}
                        className="cursor-pointer"
                        // onClick={() => editUser(row.uid)}
                      />
                      <DeleteIcon
                        style={{
                          fontSize: "20px",
                          color: "darkred",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          deleteUser(row.id);
                        }}
                      />
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        className={s.pagination}
        rowsPerPageOptions={[5, 15, 30]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default AccountsList;
