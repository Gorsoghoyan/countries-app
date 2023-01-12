import SideBar from "./components/SideBar";
import { Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <>
    <SideBar />
    <Routes>
      <Route path="/dashboard" element={<div>Dashboard</div>} />
      <Route path="/accounts" element={<div>accounts</div>} />
      <Route path="/countries" element={<div>countries</div>} />
    </Routes>
    </>
  );
}

export default App;
