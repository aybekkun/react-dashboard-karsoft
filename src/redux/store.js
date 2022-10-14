import { configureStore } from "@reduxjs/toolkit";
import leads from "./slices/leadsSlice";
import auth from "./slices/authSlice";
import designers from "./slices/designersSlice";
import menus from "./slices/menusSlice";
import orders from "./slices/ordersSlice";
import comments from "./slices/commentsSlice";
export const store = configureStore({
  reducer: {
    leads,
    auth,
    designers,
    menus,
    orders,
    comments
  },
});
