import { createSlice } from "@reduxjs/toolkit";
import bigInt from "big-integer";

const coinSlice = createSlice({
  name: 'coins',
  initialState: {
    coins: '0'
  },
  reducers: {
    addCoins(state, action) {
      let coins = bigInt(state.coins).value + bigInt(action.payload).value
      state.coins = `${coins}`
    }
  }
})

export const {addCoins} = coinSlice.actions
export default coinSlice.reducer