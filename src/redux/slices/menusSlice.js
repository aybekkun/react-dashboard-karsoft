import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchMenus = createAsyncThunk(
  "leads/fetchMenus",
  async (params, thunkAPI) => {

    const { data } = await axios.get(`/menus`);
   
    if (data.data.length === 0) {
      return thunkAPI.rejectWithValue(`Ошибка`);
    }

    return thunkAPI.fulfillWithValue(data);
  }
);

const initialState = {
  menuItems: [],

};

export const menusSlice = createSlice({
  name: "menus",
  initialState,
  reducers: {

  },
  extraReducers: {
    [fetchMenus.pending]: (state) => {
      state.status = "loading";
      state.menuItems = [];
    },
    [fetchMenus.fulfilled]: (state, action) => {
      state.status = "success";
      state.menuItems = action.payload.data;
    },
    [fetchMenus.rejected]: (state, action) => {
      console.log(action, "rejected");
      state.status = "error";
      state.menuItems = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const {  } = menusSlice.actions;

export default menusSlice.reducer;
