import { createSlice } from "@reduxjs/toolkit";

const userActivities = createSlice({
  name: "userActivities",
  initialState: {
    isUserLoggedIn: false,
    isPayment: false,
    isPaymentConfirm: false,
    isCreateSuccess: false,
    isModalOpen: false,
    myDishType: "hot",
    order: {},
  },
  reducers: {
    login: (state, action) => {
      state.isUserLoggedIn = action.payload;
    },
    payment: (state, action) => {
      state.isPayment = action.payload;
    },
    paymentConfirm: (state, action) => {
      state.isPaymentConfirm = action.payload;
    },
    createSuccess: (state, action) => {
      state.isCreateSuccess = action.payload;
    },
    modalOpen: (state, action) => {
      state.isModalOpen = action.payload;
    },
    DishType: (state, action) => {
      state.myDishType = action.payload;
    },
    addOrder: (state, action) => {
      if (state.order) {
        state.order = {};
      }
      state.order = action.payload;
    },
  },
});

export const {
  login,
  payment,
  paymentConfirm,
  createSuccess,
  modalOpen,
  DishType,
  addOrder,
} = userActivities.actions;
export default userActivities.reducer;
