import React, { useState, useEffect, useRef } from "react";
import "./OrderHome.css";
import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import {
  payment,
  myOrder,
  deleteMyOrder,
  // totalPriceAction,
  incrementQty,
  decrementQty,
} from "../../redux/actions/userActivities";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import orders from "../../orders.json";

const OrderHome = () => {
  const [whereToEat, setWhereToEat] = useState("dine in");
  const [Orders, setOrders] = useState([]);

  const dispatch = useDispatch();

  const quantity = useRef([]);
  const totalPrice = useRef([]);
  const subtotal = useRef("");

  const { ordersValue } = useSelector((store) => store.userActivities);

  useEffect(() => {
    dispatch(myOrder(orders));
  }, []);

  useEffect(() => {
    grandTotal();
    setOrders(ordersValue);
  }, [ordersValue]);

  const increment = (index) => {
    dispatch(incrementQty(index));
    grandTotal();
  };

  const decrement = (index) => {
    if (quantity.current[index].value === "1") {
      quantity.current[index].value = "1";
    } else {
      dispatch(decrementQty(index));
    }
    grandTotal();
  };

  const grandTotal = () => {
    let grandTotal = _.sumBy(ordersValue, function (order) {
      return parseInt(order.totalPrice);
    });

    subtotal.current.innerHTML = currencyFormat(grandTotal);
  };

  const deleteOrder = (index) => {
    dispatch(deleteMyOrder(index));
  };

  const currencyFormat = (num) => {
    return (
      "Rp. " +
      parseInt(num)
        .toFixed(0)
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
    );
  };

  const handlePayment = (e) => {
    e.preventDefault();
    dispatch(payment(true));
  };

  return (
    <div className="right-content">
      <div className="top-content-order">
        <h1>Orders #34562</h1>
        <div className="btn-eat-wrapper">
          <button
            onClick={() => setWhereToEat("dine in")}
            className={`btn-eat
          ${whereToEat === "dine in" ? "btn-eat-active" : ""}`}
          >
            Dine In
          </button>
          <button
            onClick={() => setWhereToEat("take away")}
            className={`btn-eat
          ${whereToEat === "take away" ? "btn-eat-active" : ""}`}
          >
            Take Away
          </button>
          <button
            onClick={() => setWhereToEat("delivery")}
            className={`btn-eat
            ${whereToEat === "delivery" ? "btn-eat-active" : ""}`}
          >
            Delivery
          </button>
        </div>
        <div className="title-row">
          <div>
            <span className="text-title-row">Item</span>
          </div>
          <div>
            <span className="me-5 text-title-row">Qty</span>
            <span className="text-title-row">Price</span>
          </div>
        </div>
      </div>
      <div className="content-wrapper">
        <div className="divider-2"></div>
        <div className="pay-products-wrapper">
          {Orders.length === 0 ? (
            <h1>Please Add Any Foods</h1>
          ) : (
            Orders.map((order, index) => (
              <div className="row mb-4" key={index}>
                <div className="col-md-2 text-center pay-img-wrapper">
                  <img src={`/images/content/${order.image}`} alt="" />
                </div>
                <div className="col-md-5 pay-product-text">
                  <p>{order.name}</p>
                  <span>{currencyFormat(order.price)}</span>
                </div>
                <div className="col-md-2 quantity">
                  <input
                    type="number"
                    ref={(ref) => {
                      quantity.current[index] = ref;
                    }}
                    readOnly
                    value={order.qty}
                  />
                </div>
                <div className="col-md-1 increment-wrapper">
                  <MdArrowDropUp
                    className="increment"
                    onClick={() => increment(index)}
                  />
                  <MdArrowDropDown
                    className="decrement"
                    onClick={() => decrement(index)}
                  />
                </div>
                <div className="col-md-2 price">
                  <p
                    ref={(ref) => {
                      totalPrice.current[index] = ref;
                    }}
                  >
                    {currencyFormat(order.totalPrice)}
                  </p>
                </div>
                <div className="col-md-10 note-input mt-3 mb-3">
                  <input type="text" placeholder="Order Note..." />
                </div>
                <div className="col-md-2 delete-icon mt-3 mb-3">
                  <span onClick={() => deleteOrder(index)}>
                    <AiOutlineDelete />
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="confirmation-payment-area">
          <div className="divider-3"></div>
          <div className="discount-wrapper">
            <span>Discount</span>
            <span>Rp0</span>
          </div>
          <div className="subTotal-wrapper">
            <span>Sub total</span>
            <span ref={subtotal}>Rp. 0</span>
          </div>
          <div className="btn-payment">
            <button onClick={handlePayment}>Continue to Payment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderHome;
