import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import useAccountsList from '../../hooks/useAccountsList';
import { Stack } from '@mui/system';
import s from "./styles.module.scss";

function AccountsList () {
  const { page, rows, rowsPerPage, deleteUser, handleChangePage, handleChangeRowsPerPage } = useAccountsList();

  return (
    <Paper className={s.paper} sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 700 }}>
        <Table className={s.table} stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
                <TableCell align="left" style={{ minWidth: "100px" }}>
                    #
                </TableCell>
                <TableCell align="left" style={{ minWidth: "100px" }}>
                    Name
                </TableCell>
                <TableCell align="left" style={{ minWidth: "100px" }}>
                    Email   
                </TableCell>
                <TableCell align="left" style={{ minWidth: "100px" }}>
                    Actions
                </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    <TableCell align="left">
                        {1}
                    </TableCell>
                    <TableCell align="left">
                        <img src={row.photoURL} alt="avatar" />
                        {row.displayName}
                    </TableCell>
                    <TableCell align="left">
                        {row.email}
                    </TableCell>
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
                                deleteUser(row.uid);
                            }}
                        />
                    </Stack>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
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