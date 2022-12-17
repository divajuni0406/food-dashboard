import React from "react";
import "../../css/AddDishModal.css";
import { IoAddSharp } from "react-icons/io5";
import { IoIosArrowRoundBack } from "react-icons/io";
import CreateSuccessNotif from "../notification/CreateSuccessNotif";
import { createSuccess, modalOpen } from "../../redux/actions/userActivities";
import { useDispatch, useSelector } from "react-redux";

const AddDishModal = () => {
  const dispatch = useDispatch();
  const { isModalOpen } = useSelector((store) => store.userActivities);

  const handlePayment = (e) => {
    e.preventDefault();
    dispatch(createSuccess(true));
  };

  const handleBack = (e) => {
    e.preventDefault();
    dispatch(modalOpen(false));
  };

  return (
    <div className={`bg-addModal ${isModalOpen ? "bg-addModal-active" : ""}`}>
      <CreateSuccessNotif />
      <div
        className={`content-add-wrapper ${
          isModalOpen ? "content-add-active" : ""
        }`}
      >
        <div className="btn-back-modal" onClick={handleBack}>
          <IoIosArrowRoundBack />
        </div>
        <h1>Add New Dish</h1>
        <div className="type-food-wrapper">
          <button>Hot Dishes</button>
          <button>Cold Dishes</button>
          <button>Soup</button>
          <button>Grill</button>
        </div>
        <div className="divider-top-add"></div>
        <div className="row">
          <div className="col-md-12">
            <div className="add-dish-wrapper">
              <span className="add-dish-icon">
                <IoAddSharp />
              </span>
              <h1>Add new dish</h1>
            </div>
          </div>
          <div className="col-md-12">
            <label htmlFor="" className="label-text">
              Product Name
            </label>
            <br />
            <input
              type="text"
              placeholder="click here..."
              className="input-add long"
            />
          </div>
          <div className="col-md-12">
            <label htmlFor="" className="label-text">
              Price
            </label>
            <br />
            <input
              type="text"
              placeholder="click here..."
              className="input-add long"
            />
          </div>
          <div className="col-md-12">
            <label htmlFor="" className="label-text">
              Stock
            </label>
            <br />
            <input
              type="text"
              placeholder="click here..."
              className="input-add small"
            />
          </div>
          <div className="col-md-12">
            <label htmlFor="" className="label-text">
              Item
            </label>
            <br />
            <input
              type="text"
              placeholder="click here..."
              className="input-add small"
            />
          </div>
          <div className="col-md-12">
            <div className="btn-payment-dish">
              <button onClick={handlePayment}>Continue to Payment</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDishModal;
