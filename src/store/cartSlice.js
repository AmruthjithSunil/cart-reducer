import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { cartVisible: false },
  reducers: {
    toggleCartVisible(state) {
      state.cartVisible = !state.cartVisible;
    },
  },
});

export default cartSlice;
