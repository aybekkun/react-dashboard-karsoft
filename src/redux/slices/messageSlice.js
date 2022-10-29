import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchMessage = createAsyncThunk(
  "leads/fetchMessage",
  async (params) => {
   await axios.get(`/message_send?${params}`);
  }
);

const initialState = {
  message: "",

};

export const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {

  },
  extraReducers: {
    [fetchMessage.pending]: (state) => {
      state.status = "loading";
    
    },
    [fetchMessage.fulfilled]: (state) => {
      state.status = "success";
    
    },
    [fetchMessage.rejected]: (state, action) => {
      console.log(action, "rejected");
      state.status = "error";
 
    },
  },
});



export default messageSlice.reducer;
