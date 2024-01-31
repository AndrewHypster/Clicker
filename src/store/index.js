import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./userSlice"
import coinReducer from "./coinSlice"
import earnReducer from "./earnSlice"
import shopReducer from "./shopSlice"

export default configureStore({
  reducer: {
    user: userReducer,
    coin: coinReducer,
    earn: earnReducer,
    shop: shopReducer
  }
})