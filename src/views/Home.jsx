import React, { useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import "../css/Home.css";
import { Link } from "react-router-dom";
import foods from "../foods.json";
import orders from "../orders.json";
import _ from "lodash";
import { useSelector, useDispatch } from "react-redux";
import { payment } from "../redux/actions/userActivities";
import Payment from "./Payment";

const Home = () => {
  const [dishType, setDishType] = useState("hot");
  const [Orders, setOrders] = useState([]);
  const [whereToEat, setWhereToEat] = useState("dine in");
  const [whereToEatDrop, setWhereToEatDrop] = useState("Dine In");
  const [toggleDropdown, setToggleDropdown] = useState(false);

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

  const calculation = (event) => {
    console.log(event.target.value);
  };

  const decrement = (index) => {
    let quantity = document.querySelector("#quantity-" + index);
    let totalPrice = document.querySelector("#total-price-" + index);

    if (quantity.value === 1) {
      quantity.value = 1;
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
    console.log(isPayment);
  };

  useEffect(() => {
    let hot = document.querySelector("#hot");
    let cold = document.querySelector("#cold");
    let boxMenuHot = document.querySelector("#box-menu-hot");
    let boxMenuCold = document.querySelector("#box-menu-cold");
    setOrders(orders);
    grandTotal();

    if (dishType === "hot") {
      hot.classList.add("nav-food-active");
      cold.classList.remove("nav-food-active");
      boxMenuHot.classList.add("box-menu-active");
    } else if (dishType === "cold") {
      hot.classList.remove("nav-food-active");
      cold.classList.add("nav-food-active");
      boxMenuCold.classList.add("box-menu-active");
    } else {
      hot.classList.remove("nav-food-active");
      cold.classList.remove("nav-food-active");
    }
  }, [dishType, Orders]);

  return (
    <div className="bg-home">
      <Payment />
      <div className="container">
        <div className="center-content">
          <div className="top-content-area">
            <div className="top-wrapper">
              <div className="top-text-wrapper">
                <h1>Made Resto</h1>
                <span>Tuesday, 2 Feb 2021</span>
              </div>
              <div className="search-area">
                <form action="">
                  <button className="search-icon">
                    <BiSearch />
                  </button>
                  <input
                    type="search"
                    className="search"
                    placeholder="Search for food, coffe, etc.."
                  />
                </form>
              </div>
            </div>
            <div className="top-wrapper mt-4">
              <Link
                className="nav-food"
                id="hot"
                onClick={() => setDishType("hot")}
              >
                Hot Dishes
              </Link>
              <Link
                className="nav-food"
                id="cold"
                onClick={() => setDishType("cold")}
              >
                Cold Dishes
              </Link>
              <Link className="nav-food" onClick={() => setDishType("shop")}>
                Shop
              </Link>
              <Link className="nav-food" onClick={() => setDishType("grill")}>
                Grill
              </Link>
              <Link
                className="nav-food"
                onClick={() => setDishType("appetizer")}
              >
                Appetizer
              </Link>
              <Link className="nav-food" onClick={() => setDishType("dessert")}>
                Dessert
              </Link>
            </div>
            <div className="divider"></div>
            <div className="choose-dish-area mt-4">
              <div className="choose-dish-text">
                <span>Choose Dishes</span>
              </div>
              <div
                className="btn-dropdown-eat"
                onClick={() => setToggleDropdown(!toggleDropdown)}
              >
                <span>
                  {toggleDropdown ? (
                    <RiArrowDropUpLine />
                  ) : (
                    <RiArrowDropDownLine />
                  )}
                </span>
                <h4>{whereToEatDrop}</h4>
                <div
                  className={`dropdown-eat-area ${
                    toggleDropdown ? "dropdown-eat-area-active" : ""
                  }`}
                >
                  <option
                    value="Dine In"
                    onClick={(e) => setWhereToEatDrop(e.target.value)}
                  >
                    Dine In
                  </option>
                  <option
                    value="Take It"
                    onClick={(e) => setWhereToEatDrop(e.target.value)}
                  >
                    Take It
                  </option>
                  <option
                    value="Delivery"
                    onClick={(e) => setWhereToEatDrop(e.target.value)}
                  >
                    Delivery
                  </option>
                </div>
              </div>
            </div>
            <div className="">
              <div className="row mt-5 general-product">
                {dishType === "hot" || dishType === "cold" ? (
                  _.filter(foods, { type: dishType }).map((food, index) => (
                    <div className="col-md-4" key={index}>
                      <div className="box-menu" id={`box-menu-${dishType}`}>
                        <img src={`/images/Content/${food.image}`} alt="" />
                        <h1>{food.food_name}</h1>
                        <h2>{food.price}</h2>
                        <h3>{`${food.stock} Bowls Available`}</h3>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="not-available-content text-center">
                    <span>Content Is Not Available Yet</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
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
                      onChange={calculation}
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
      </div>
    </div>
  );
};

export default Home;
