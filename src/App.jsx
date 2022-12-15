import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Setting from "./views/Setting";
import Home from "./views/Home";
import Navbar from "./views/Navbar";
import LogoutNotif from "./views/LogoutNotif";
import { useSelector } from "react-redux";

function App() {
  const { isUserLoggedIn } = useSelector((store) => store.userActivities);

  return (
    <Router>
      {isUserLoggedIn ? <LogoutNotif /> : ""}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/setting" element={<Setting />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
