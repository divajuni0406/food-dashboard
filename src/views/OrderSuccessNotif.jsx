import React, { useEffect } from "react";
import "../css/OrderSuccessNotif.css";
import { paymentConfirm } from "../redux/actions/userActivities";
import { useDispatch, useSelector } from "react-redux";

const OrderSuccess = () => {
  const dispatch = useDispatch();
  const { isPaymentConfirm } = useSelector((store) => store.userActivities);

  useEffect(() => {
    setTimeout(() => {
      dispatch(paymentConfirm(false));
    }, 2000);
  }, [isPaymentConfirm]);

  console.log(paymentConfirm);

  return (
    <div
      className={`bg-orderNotif ${isPaymentConfirm ? "orderNotif-active" : ""}`}
    >
      <div className="orderNotif-wrapper">
        <h1>Order Success</h1>
        <span>---</span>
      </div>
    </div>
  );
};

export default OrderSuccess;
