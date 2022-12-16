import React, { useEffect } from "react";
import "../css/CreateSuccessNotif.css";
import { createSuccess } from "../redux/actions/userActivities";
import { useDispatch, useSelector } from "react-redux";

const CreateSuccessNotif = () => {
  const dispatch = useDispatch();
  const { isCreateSuccess } = useSelector((store) => store.userActivities);

  useEffect(() => {
    setTimeout(() => {
      dispatch(createSuccess(false));
    }, 2000);
  }, [isCreateSuccess]);

  console.log(isCreateSuccess);

  return (
    <div
      className={`bg-createNotif ${
        isCreateSuccess ? "createNotif-active" : ""
      }`}
    >
      <div className="createNotif-wrapper">
        <h1>Create Success</h1>
        <span>---</span>
      </div>
    </div>
  );
};

export default CreateSuccessNotif;
