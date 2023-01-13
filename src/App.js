import SideBar from "./components/SideBar";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Auth from "./pages/Auth";

function App() {
  
  return (
    <>
    {/* <SideBar />
    <Header /> */}
    <Routes>
      {/* <Route path="/dashboard" element={<div>Dashboard</div>} />
      <Route path="/accounts" element={<div>accounts</div>} />
      <Route path="/countries" element={<div>countries</div>} /> */}
      <Route path="/auth" element={<Auth type="login" />} />
    </Routes>
    </>
  );
}

export default App;
