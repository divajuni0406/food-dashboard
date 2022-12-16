import React, { useState } from "react";
import "../css/Payment.css";
import { useSelector, useDispatch } from "react-redux";
import { payment } from "../redux/actions/userActivities";
import { IoIosArrowRoundBack, IoMdAdd } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import {
  BsCreditCard,
  BsFillCheckCircleFill,
  BsCashCoin,
} from "react-icons/bs";
import { RiPaypalLine } from "react-icons/ri";
import OrderSuccess from "./OrderSuccessNotif";
import { paymentConfirm } from "../redux/actions/userActivities";

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("credit card");
  const [whereToEat, setWhereToEat] = useState("Dine In");
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const dispatch = useDispatch();

  const { isPayment } = useSelector((store) => store.userActivities);

  const handleBack = (e) => {
    e.preventDefault();
    dispatch(payment(false));
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    dispatch(paymentConfirm(true));
  };
  return (
    <div className={`bg-payment ${isPayment ? "bg-payment-active" : ""}`}>
      <OrderSuccess />
      <div
        className={`content-payment-wrapper ${
          isPayment ? "payment-active" : ""
        }`}
      >
        <div className="confirmation-area">
          <div className="btn-back" onClick={handleBack}>
            <IoIosArrowRoundBack />
          </div>
          <div className="top-confirm-area">
            <div className="text-confirm">
              <h1>Confirmation</h1>
              <h2>Orders #34562</h2>
            </div>
            <div className="btn-add">
              <IoMdAdd />
            </div>
          </div>
          <div className="divider-top-confirm"></div>
          <div className="product-confirm-wrapper">
            <div className="row mb-4">
              <div className="col-md-2 text-center pay-img-wrapper">
                <img src="/images/content/cold_1.jpg" alt="" />
              </div>
              <div className="col-md-6 pay-product-text">
                <p>Spicy seasoned sea...</p>
                <span>Rp.43.000</span>
              </div>
              <div className="col-md-2 quantity">
                <span>2</span>
              </div>
              <div className="col-md-2 price">
                <p>Rp.86.000</p>
              </div>
              <div className="col-md-10 note-input mt-3 mb-3">
                <input type="text" placeholder="Order Note..." />
              </div>
              <div className="col-md-2 delete-icon mt-3 mb-3">
                <span>
                  <AiOutlineDelete />
                </span>
              </div>
            </div>
          </div>
          <div className="payment-total-area">
            <div className="divider-3"></div>
            <div className="discount-wrapper">
              <span>Discount</span>
              <span>Rp0</span>
            </div>
            <div className="subTotal-wrapper">
              <span>Sub total</span>
              <span>Rp.295.000</span>
            </div>
          </div>
        </div>
        <div className="divider-payment"></div>
        <div className="payment-area">
          <div className="text-payment">
            <h1>Payment</h1>
            <h2>3 payment methode avilable</h2>
          </div>
          <div className="divider-top-payment"></div>
          <div className="credit-card-area">
            <h1>Payment Method</h1>
            <div className="payment-method">
              <div
                className={`credit-card-wrapper ${
                  paymentMethod === "credit card" ? "credit-card-active" : ""
                }`}
                onClick={() => setPaymentMethod("credit card")}
              >
                <div
                  className={`payment-icon ${
                    paymentMethod === "credit card" ? "payment-icon-active" : ""
                  }`}
                >
                  <BsCreditCard />
                </div>
                {paymentMethod === "credit card" ? (
                  <div className="check-icon">
                    <BsFillCheckCircleFill />
                  </div>
                ) : (
                  ""
                )}
                <span
                  className={`text-payment-method ${
                    paymentMethod === "credit card"
                      ? "text-payment-method-active"
                      : ""
                  }`}
                >
                  Credit Card
                </span>
              </div>
              <div
                className={`credit-card-wrapper ${
                  paymentMethod === "paypal" ? "credit-card-active" : ""
                }`}
                onClick={() => setPaymentMethod("paypal")}
              >
                <div
                  className={`payment-icon ${
                    paymentMethod === "paypal" ? "payment-icon-active" : ""
                  }`}
                >
                  <BsCashCoin />
                </div>
                {paymentMethod === "paypal" ? (
                  <div className="check-icon">
                    <BsFillCheckCircleFill />
                  </div>
                ) : (
                  ""
                )}
                <span
                  className={`text-payment-method ${
                    paymentMethod === "paypal"
                      ? "text-payment-method-active"
                      : ""
                  }`}
                >
                  Paypal
                </span>
              </div>
              <div
                className={`credit-card-wrapper ${
                  paymentMethod === "cash" ? "credit-card-active" : ""
                }`}
                onClick={() => setPaymentMethod("cash")}
              >
                <div
                  className={`payment-icon ${
                    paymentMethod === "cash" ? "payment-icon-active" : ""
                  }`}
                >
                  <RiPaypalLine />
                </div>
                {paymentMethod === "cash" ? (
                  <div className="check-icon">
                    <BsFillCheckCircleFill />
                  </div>
                ) : (
                  ""
                )}
                <span
                  className={`text-payment-method ${
                    paymentMethod === "cash" ? "text-payment-method-active" : ""
                  }`}
                >
                  Cash
                </span>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-12">
                <label className="label-payment">Cardholder Name</label>
                <br />
                <input
                  type="text"
                  className="input-payment"
                  placeholder="Test Programmer"
                />
              </div>
              <div className="col-md-12">
                <label className="label-payment">Card Number</label>
                <br />
                <input
                  type="text"
                  className="input-payment"
                  placeholder="2564 1421 0897 1244"
                />
              </div>
              <div className="col-md-6">
                <label className="label-payment">Expired Date</label>
                <br />
                <input
                  type="text"
                  className="input-payment"
                  placeholder="02/2023"
                />
              </div>
              <div className="col-md-6">
                <label className="label-payment">CVV</label>
                <br />
                <input
                  type="password"
                  className="input-payment-cvv"
                  placeholder="..."
                />
              </div>
              <div className="divider-order"></div>
              <div className="col-md-6">
                <label className="label-payment">Order Type</label>
                <br />
                <div
                  className="btn-dropdown-food"
                  onClick={() => setToggleDropdown(!toggleDropdown)}
                >
                  <span>
                    {toggleDropdown ? (
                      <RiArrowDropUpLine />
                    ) : (
                      <RiArrowDropDownLine />
                    )}
                  </span>
                  <h4>{whereToEat}</h4>
                  <div
                    className={`dropdown-area ${
                      toggleDropdown ? "dropdown-area-active" : ""
                    }`}
                  >
                    <option
                      value="Dine In"
                      onClick={(e) => setWhereToEat(e.target.value)}
                    >
                      Dine In
                    </option>
                    <option
                      value="Take It"
                      onClick={(e) => setWhereToEat(e.target.value)}
                    >
                      Take It
                    </option>
                    <option
                      value="Delivery"
                      onClick={(e) => setWhereToEat(e.target.value)}
                    >
                      Delivery
                    </option>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <label className="label-payment">Table no.</label>
                <br />
                <input
                  type="text"
                  className="input-payment"
                  placeholder="001"
                />
              </div>
              <div className="col-md-6">
                <button className="btn-payment-confirm" onClick={handleBack}>
                  Cancel
                </button>
              </div>
              <div className="col-md-6">
                <button className="btn-payment-confirm" onClick={handleConfirm}>
                  Confirm Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
