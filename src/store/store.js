import { configureStore } from "@reduxjs/toolkit";
import reducer from './slice.js'

export default configureStore({
  reduser: {
    points: reducer
  }
})