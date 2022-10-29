import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchDesigners = createAsyncThunk(
  "leads/fetchDesigners",
  async (params, thunkAPI) => {
    const { data } = await axios.get(`/ratings`);
    if (data.data.length === 0) {
      return thunkAPI.rejectWithValue(`Ошибка`);
    }
    return thunkAPI.fulfillWithValue(data);
  }
);
export const fetchDesigner = createAsyncThunk(
  "leads/fetchDesigner",
  async (params, thunkAPI) => {
    const { data } = await axios.get(`/employees/${params}`);
    if (data.data.length === 0) {
      return thunkAPI.rejectWithValue(`Ошибка`);
    }
    return thunkAPI.fulfillWithValue(data);
  }
);
export const fetchGeneral = createAsyncThunk(
  "leads/fetchGeneral",
  async (params) => {
    const {data} = await axios.get(`/ratings_general`);
  
    return data;
  }
);

const initialState = {
  items: [],
  status: "loading",
  disignersCount: 0,
  info: {},
  middleOverall:0
};

export const designersSlice = createSlice({
  name: "designers",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchDesigners.pending]: (state) => {
      state.status = "loading";
      state.items = [];
    },
    [fetchDesigners.fulfilled]: (state, action) => {
      state.status = "success";
      state.items = action.payload.data;

      state.disignersCount = action.payload.data.length;

      // state.bestDesigner = state.items.find(
      //   (obj) =>
      //     obj.id ===
      //     state.overalls.find(
      //       (item) =>
      //         item.overall ===
      //         Math.max(...state.overalls.map((overall) => overall.overall))
      //     ).id
      // ).name;
    },
    [fetchDesigners.rejected]: (state, action) => {
      console.log(action, "rejected");
      state.status = "error";
      state.items = [];
    },
    [fetchDesigner.pending]: (state) => {},
    [fetchDesigner.fulfilled]: (state, action) => {
      state.info = action.payload.data[0];
    },
    [fetchDesigner.rejected]: (state, action) => {},
    [fetchGeneral.pending]: (state) => {},
    [fetchGeneral.fulfilled]: (state, action) => {
      state.middleOverall = action.payload;
    },
    [fetchGeneral.rejected]: (state, action) => {},
  },
});

// Action creators are generated for each case reducer function
// export const {} = designersSlice.actions;

export default designersSlice.reducer;
