import React from "react";
import "../components/SettingPage/Setting.css";
import AddDishModal from "./modal/AddDishModal";
import TopSetting from "../components/SettingPage/TopSetting";
import EditDish from "../components/SettingPage/EditDish";

const Setting = () => {
  return (
    <div className="bg-setting">
      <AddDishModal />
      <div className="container-fluid">
        <h1 className="title-setting">Settings</h1>
        <div className="setting-wrapper">
          <div className="content-setting">
            <TopSetting />
            <EditDish />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
