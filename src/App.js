import { Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import Loading from "./components/Loading";
import GoTopArrow from "./components/GoTopArrow";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import LayoutRoute from "./routes/LayoutRoute/LayoutRoute";
import RedirectRoute from "./routes/RedirectRoute";

const Auth = lazy(() => import("./pages/Auth"));
const Error = lazy(() => import("./pages/Error"));
const Profile = lazy(() => import("./pages/Profile"));
const Password = lazy(() => import("./pages/Password"));
const Accounts = lazy(() => import("./pages/Accounts"));
const Countries = lazy(() => import("./pages/Countries"));
const Dashboard = lazy(() => import("./pages/Dashboard"));

export function App() {

  useEffect(() => {
    const getCountries = async () => {
      try {
        const resp = await fetch("https://countries-app-auth-default-rtdb.firebaseio.com/countries");
        const res = await resp.json();
        if (res.message) throw new Error(res.message);
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    };
    getCountries();
  }, []);

  return (
    <>
      <Suspense fallback={<Loading />}> 
        <Routes>
          <Route index path="/" element={<RedirectRoute />} />
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
    </>
  );
}

export default App;