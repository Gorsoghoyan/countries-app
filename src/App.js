import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "./components/Loading";
import GoTopArrow from "./components/GoTopArrow";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";

const Auth = lazy(() => import("./pages/Auth"));
const Error = lazy(() => import("./pages/Error"));
const Accounts = lazy(() => import("./pages/Accounts"));
const Countries = lazy(() => import("./pages/Countries"));
const Dashboard = lazy(() => import("./pages/Dashboard"));

export function App() {
  
  return (
    <>
      <Suspense fallback={<Loading />}> 
        <Routes>
          <Route path="admin" element={<PrivateRoute />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="countries" element={<Countries />} />
            <Route path="accounts" element={<Accounts />} />
          </Route>

          <Route path="user" element={<PublicRoute />}>
            <Route path="login" element={<Auth type="login" />} />
            <Route path="register" element={<Auth type="register" />} />
          </Route>

          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
      <GoTopArrow />
    </>
  );
}

export default App;