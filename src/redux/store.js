import { configureStore } from '@reduxjs/toolkit'
import leads from './slices/leadsSlice'
export const store = configureStore({
  reducer: {
    leads
  },
})