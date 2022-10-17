import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchLeads = createAsyncThunk(
  "leads/fetchLeads",
  async (params, thunkAPI) => {
    const { page, ...searchParams } = params;
    const username = searchParams.username
      ? `name=${searchParams.username}`
      : "";
    const surname = searchParams.surname
      ? `&surname=${searchParams.surname}`
      : "";
    const phone = searchParams.phone ? `&phone=${searchParams.phone}` : "";
    const company = searchParams.company
      ? `&company=${searchParams.company}`
      : "";
    const status = searchParams.userStatus
      ? `&status=${searchParams.userStatus}`
      : "";
    const fromDate = searchParams.from
      ? `&start_date=${searchParams.from}`
      : "";
    const beforeDate = searchParams.before
      ? `&end_date=${searchParams.before}`
      : "";

    const { data } = await axios.get(
      `/leads?${username}${surname}${phone}${company}${status}${fromDate}${beforeDate}&limit=10&page=${page}`
    );
    if (data.data.length === 0) {
      return thunkAPI.rejectWithValue(`Ошибка`);
    }

    return thunkAPI.fulfillWithValue(data);
  }
);
export const fetchDownload = createAsyncThunk(
  "leads/fetchDownload",
  async (params, thunkAPI) => {
    const { ...searchParams } = params;
    const username = searchParams.username
      ? `name=${searchParams.username}`
      : "";
    const surname = searchParams.surname
      ? `&surname=${searchParams.surname}`
      : "";
    const phone = searchParams.phone ? `&phone=${searchParams.phone}` : "";
    const company = searchParams.company
      ? `&company=${searchParams.company}`
      : "";
    const status = searchParams.userStatus
      ? `&status=${searchParams.userStatus}`
      : "";
    const fromDate = searchParams.from
      ? `&start_date=${searchParams.from}`
      : "";
    const beforeDate = searchParams.before
      ? `&end_date=${searchParams.before}`
      : "";

    const { data } = await axios({
      url: `/leads_export?${username}${surname}${phone}${company}${status}${fromDate}${beforeDate}`,
      method: "GET",
      responseType: "blob", // important
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "file.xlsx");
      document.body.appendChild(link);
      link.click();
    });
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
  searchParams: {},
  total:0
};

export const leadsSlice = createSlice({
  name: "leads",
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setSearchParams(state, action) {
      state.searchParams = action.payload;
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
      state.totalPage = Math.ceil(Number(action.payload.meta.total) / 10);
      state.total = action.payload.meta.total;
    },
    [fetchLeads.rejected]: (state, action) => {
      console.log(action, "rejected");
      state.status = "error";
      state.items = [];
    },
    [fetchDownload.pending]: (state) => {
 
    },
    [fetchDownload.fulfilled]: (state, action) => {
      console.log(action, "success");
    },
    [fetchDownload.rejected]: (state, action) => {
      console.log(action, "rejected");
   
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCurrentPage, setSearchParams } = leadsSlice.actions;

export default leadsSlice.reducer;
