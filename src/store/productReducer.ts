import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  selectedCategory: '',
  selectedProduct: [],
  searchedProducts: [],
  cart: [],
};

const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    setCategory(state, action) {
      state.categories = action.payload || []
    },
    setSelectedCategory(state, action) {
      state.selectedCategory = action.payload || ''
    },
    setSelectedProduct(state, action) {
      state.selectedProduct = action.payload || []
    },
    setSearchedProducts(state, action) {
      state.searchedProducts = action.payload || []
    },
    addCartItem(state, action) {
      const newItem: any = action.payload
      if (newItem) {
        // @ts-ignore
        state.cart.push(newItem)
      }
    },
    removeItemFromCart(state, action) {
      const removedItemId = action.payload?.id;
      const index = state.cart.findIndex((item: any) => item?.id === removedItemId && item?.title == action.payload.title);
      if (index !== -1) {
        state.cart.splice(index, 1);
      }
    },
  }
});

export const { setSearchedProducts, addCartItem, removeItemFromCart, setSelectedCategory, setCategory, setSelectedProduct } = productSlice.actions;
export default productSlice.reducer;
