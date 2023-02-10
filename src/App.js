// import { Routes, Route } from "react-router-dom";
// import { lazy, Suspense } from "react";
// import Toastify from "./components/Toastify";
// import Loading from "./components/Loading";
// import GoTopArrow from "./components/GoTopArrow";
// import PublicRoute from "./routes/PublicRoute";
// import RequireAuth from "./routes/RequireAuth";
// import PrivateRoute from "./routes/PrivateRoute"; 
// import LayoutRoute from "./routes/LayoutRoute/LayoutRoute";

// const Auth = lazy(() => import("./pages/Auth"));
// const Error = lazy(() => import("./pages/Error"));
// const Profile = lazy(() => import("./pages/Profile"));
// const Password = lazy(() => import("./pages/Password"));
// const Accounts = lazy(() => import("./pages/Accounts"));
// const Countries = lazy(() => import("./pages/Countries"));
// const Dashboard = lazy(() => import("./pages/Dashboard"));

import Table from "./components/Table";
import TableBody from "./components/Table/TableBody";
import TableBodyCell from "./components/Table/TableBodyCell";
import TableHead from "./components/Table/TableHead";
import TableHeadCell from "./components/Table/TableHeadCell";
import TableRow from "./components/Table/TableRow";

const rows = [
  {name: "Gor Soghoyan", email: "soghoyangor99@gmail.com", id: Math.random(), },
  {name: "Gor Soghoyan", email: "soghoyangor99@gmail.com", id: Math.random(), },
  {name: "Gor Soghoyan", email: "soghoyangor99@gmail.com", id: Math.random(), },
  {name: "Gor Soghoyan", email: "soghoyangor99@gmail.com", id: Math.random(), },
  {name: "Gor Soghoyan", email: "soghoyangor99@gmail.com", id: Math.random(), },
  {name: "Gor Soghoyan", email: "soghoyangor99@gmail.com", id: Math.random(), },
  {name: "Gor Soghoyan", email: "soghoyangor99@gmail.com", id: Math.random(), },
  {name: "Gor Soghoyan", email: "soghoyangor99@gmail.com", id: Math.random(), },
];

const columns = [
  { id: 1, title: "#", align: "left", minWidth: "100px" },
  { id: 2, title: "Name", align: "left", minWidth: "100px" },
  { id: 3, title: "Email", align: "left", minWidth: "100px" },
  { id: 4, title: "Actions", align: "left", minWidth: "100px" },
];

export function App() {
  return (
    <>
      {/* <Suspense fallback={<Loading />}> 
        <Routes>
          <Route index path="/" element={<RequireAuth />} />
          <Route path="" element={<PrivateRoute />}>
            <Route path="" element={<LayoutRoute />}>
              <Route path="admin/dashboard" element={<Dashboard />} />
              <Route path="admin/countries" element={<Countries />} />
              <Route path="admin/accounts" element={<Accounts />} />
              <Route path="admin/profile" element={<Profile />} />
            </Route>
          </Route>
          <Route path="" element={<PublicRoute />}>
            <Route path="user/login" element={<Auth type="login" />} />
            <Route path="user/register" element={<Auth type="register" />} />
            <Route path="reset-password" element={<Password type="reset" />} />
            <Route path="forgot-password" element={<Password type="forgot" />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
      <GoTopArrow />
      <Toastify /> */}
      <Table border="1" style={{ borderCollapse: "collapse" }}>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableHeadCell key={column.id} style={{ padding: 20 }}>
                {column.title}
              </TableHeadCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={row.id}>
              <TableBodyCell style={{ padding: 20 }}>{index + 1}</TableBodyCell>  
              <TableBodyCell style={{ padding: 20 }}>{row.name}</TableBodyCell>
              <TableBodyCell style={{ padding: 20 }}>{row.email}</TableBodyCell>
              <TableBodyCell style={{ padding: 20 }}>{index + 1}</TableBodyCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export default App;