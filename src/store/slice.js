import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: 'points',
  initialState: {
    points: 0
  },
  reducers: {
    addPoints(state, action) {
      state.points += action.payload.points
    }
  }
})

export const {addPoints} = slice.actions
export default slice.reducer