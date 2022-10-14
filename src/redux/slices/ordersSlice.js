import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchOrders = createAsyncThunk(
  "orders/fetchOrders",
  async (params, thunkAPI) => {
    const {currentPage} = params;
    const { data } = await axios.get(`/orders?limit=10&page${currentPage}`);
    if (data.data.length === 0) {
      return thunkAPI.rejectWithValue(`Ошибка`);
    }

    return thunkAPI.fulfillWithValue(data);
  }
);

const initialState = {
  items: [],
  status: "loading",
  totalPage: 0,
  currentPage: 1,
  // loading | success| error
};

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  
  },
  extraReducers: {
    [fetchOrders.pending]: (state) => {
      state.status = "loading";
      state.items = [];
    },
    [fetchOrders.fulfilled]: (state, action) => {
      state.status = "success";
      state.items = action.payload.data;
      state.totalPage = Math.ceil(Number(action.payload.meta.total) / 10);
    },
    [fetchOrders.rejected]: (state, action) => {
      console.log(action, "rejected");
      state.status = "error";
      state.items = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCurrentPage } = ordersSlice.actions;

export default ordersSlice.reducer;
