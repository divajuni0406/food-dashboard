import React, { useState, useEffect } from "react";
import "./OrderHome.css";
import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { payment } from "../../redux/actions/userActivities";
import _ from "lodash";
import { useSelector, useDispatch } from "react-redux";
import orders from "../../orders.json";

const OrderHome = () => {
  const [whereToEat, setWhereToEat] = useState("dine in");
  const [Orders, setOrders] = useState([]);

  useEffect(() => {
    grandTotal();
    setOrders(orders);
  }, [Orders]);

  const dispatch = useDispatch();
  const { isPayment } = useSelector((store) => store.userActivities);

  const increment = (index) => {
    let quantity = document.querySelector("#quantity-" + index);
    let totalPrice = document.querySelector("#total-price-" + index);
    quantity.value++;

    let total = parseInt(Orders[index].price) * quantity.value;
    totalPrice.innerHTML = currencyFormat(total);
    Orders[index].totalPrice = total.toString();

    grandTotal();
  };

  const decrement = (index) => {
    let quantity = document.querySelector("#quantity-" + index);
    let totalPrice = document.querySelector("#total-price-" + index);

    if (quantity.value === "1") {
      quantity.value = "1";
    } else {
      quantity.value--;
    }

    let total = parseInt(Orders[index].price) * quantity.value;
    totalPrice.innerHTML = currencyFormat(total);
    Orders[index].totalPrice = total.toString();
    grandTotal();
  };

  const grandTotal = () => {
    let subtotal = document.querySelector("#subtotal");
    let grandTotal = _.sumBy(Orders, function (order) {
      return parseInt(order.totalPrice);
    });

    subtotal.innerHTML = currencyFormat(grandTotal);
  };

  const deleteOrder = (index) => {
    let listOrder = Orders.splice(index, 1);
    setOrders(listOrder);
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
          {Orders.map((order, index) => (
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
                  id={`quantity-${index}`}
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
                <p id={`total-price-${index}`}>
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
          ))}
        </div>
        <div className="confirmation-payment-area">
          <div className="divider-3"></div>
          <div className="discount-wrapper">
            <span>Discount</span>
            <span>Rp0</span>
          </div>
          <div className="subTotal-wrapper">
            <span>Sub total</span>
            <span id="subtotal">Rp. 0</span>
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
