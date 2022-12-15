import React from "react";
import "../css/LogoutNotif.css";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/userActivities";

const LogoutNotif = () => {
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(false));
  };

  return (
    <div className="bg-logoutNotif">
      <div className="logout-wrapper">
        <p>Do You Really Want To Logout ?</p>
        <button className="btn-logout-confirm" onClick={handleLogin}>
          Yes
        </button>
        <button className="btn-logout-confirm" onClick={handleLogin}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default LogoutNotif;
