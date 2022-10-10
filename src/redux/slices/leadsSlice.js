import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchLeads = createAsyncThunk(
  "leads/fetchLeads",
  async (params, thunkAPI) => {
    const { page } = params;
    const { data } = await axios.get(`/leads?limit=3&page=${page}`);
    if (data.data.length === 0) {
      return thunkAPI.rejectWithValue("Нет данных");
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

export const leadsSlice = createSlice({
  name: "leads",
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: {
    [fetchLeads.pending]: (state) => {
      state.status = "loading";
      state.items = [];
    },
    [fetchLeads.fulfilled]: (state, action) => {
      state.status = "success";
      state.items = action.payload.data;
      state.totalPage = Math.ceil(Number(action.payload.meta.total) / 3);
    },
    [fetchLeads.rejected]: (state, action) => {
      console.log(action, "rejected");
      state.status = "error";
      state.items = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCurrentPage } = leadsSlice.actions;

export default leadsSlice.reducer;
