import { configureStore } from "@reduxjs/toolkit"
import coinReducer from "./coinSlice"
import earnReducer from "./earnSlice"

export default configureStore({
  reducer: {
    coin: coinReducer,
    earn: earnReducer
  }
})