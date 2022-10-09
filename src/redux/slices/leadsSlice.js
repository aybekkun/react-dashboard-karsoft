import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchLeads = createAsyncThunk(
  "leads/fetchLeads",
  async (_, thunkAPI) => {

    const { data } = await axios.get(
      `/leads`
    );
    if (data.data.length === 0) {
      return thunkAPI.rejectWithValue("Пиццы пустые");
    }
    console.log("hi")
    return thunkAPI.fulfillWithValue(data);
    
  }
);

const initialState = {
  items: [],
  status: "loading", // loading | success| error
};

export const leadsSlice = createSlice({
  name: "leads",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
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
    },
    [fetchLeads.rejected]: (state, action) => {
      console.log(action, "rejected");
      state.status = "error";
      state.items = [];
    },
  },
});

export const selectleadsData = (state) => state.leads;
// Action creators are generated for each case reducer function
export const { setItems } = leadsSlice.actions;

export default leadsSlice.reducer;