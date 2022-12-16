import { createSlice } from "@reduxjs/toolkit";

const userActivities = createSlice({
  name: "userActivities",
  initialState: {
    isUserLoggedIn: false,
    isPayment: false,
    isPaymentConfirm: false,
    isCreateSuccess: false,
    isModalOpen: false,
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
  },
});

export const { login, payment, paymentConfirm, createSuccess, modalOpen } =
  userActivities.actions;
export default userActivities.reducer;
