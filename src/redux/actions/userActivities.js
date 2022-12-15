import { createSlice } from "@reduxjs/toolkit";

const userActivities = createSlice({
  name: "userActivities",
  initialState: {
    isUserLoggedIn: false,
    isPayment: false,
    isPaymentConfirm: false,
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
  },
});

export const { login, payment, paymentConfirm } = userActivities.actions;
export default userActivities.reducer;
