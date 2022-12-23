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
    ordersValue: [],
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
    addFood: (state, action) => {
      const itemIndex = state.ordersValue.findIndex(
        (item) => item.name === action.payload.name
      );
      if (itemIndex >= 0) {
        state.ordersValue[itemIndex].qty += 1;
        let total =
          state.ordersValue[itemIndex].price * state.ordersValue[itemIndex].qty;
        state.ordersValue[itemIndex].totalPrice = total;
      } else {
        state.ordersValue.push(action.payload);
      }
    },
    myOrder: (state, action) => {
      state.ordersValue = action.payload;
    },
    deleteMyOrder: (state, action) => {
      state.ordersValue.splice(action.payload, 1);
    },
    incrementQty: (state, action) => {
      state.ordersValue[action.payload].qty++;
      let total =
        state.ordersValue[action.payload].price *
        state.ordersValue[action.payload].qty;
      state.ordersValue[action.payload].totalPrice = total;
    },
    decrementQty: (state, action) => {
      state.ordersValue[action.payload].qty--;
      let total =
        state.ordersValue[action.payload].price *
        state.ordersValue[action.payload].qty;
      state.ordersValue[action.payload].totalPrice = total;
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
  addFood,
  myOrder,
  deleteMyOrder,
  incrementQty,
  decrementQty,
} = userActivities.actions;
export default userActivities.reducer;
