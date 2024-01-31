import { createSlice } from "@reduxjs/toolkit";

const earnSlice = createSlice({
  name: 'earn',
  initialState: {
    earn: 0
  },
  reducers: {
    addEarn(state, action) {
      state.earn += action.payload
    },

    setEarn(state, action) {
      state.earn = action.payload
    }
  }
})

export const { addEarn, setEarn } = earnSlice.actions
export default earnSlice.reducer