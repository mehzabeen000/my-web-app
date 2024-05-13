import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false
};

const exampleSlice = createSlice({
  name: "example",
  initialState: initialState,
  reducers: {
    setLoading(state, action) {
      state.isLoading = action.payload || false;
    }
  },
});

export const { setLoading } = exampleSlice.actions;
export default exampleSlice.reducer;