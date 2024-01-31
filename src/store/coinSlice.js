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
    },

    setCoins (state, action) {
      state.coins = `${action.payload}`
    }
  }
})

export const {addCoins, setCoins} = coinSlice.actions
export default coinSlice.reducer