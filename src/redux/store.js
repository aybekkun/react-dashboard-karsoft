import { configureStore } from "@reduxjs/toolkit";
import leads from "./slices/leadsSlice";
import auth from "./slices/authSlice";
export const store = configureStore({
  reducer: {
    leads,
    auth,
  },
});
