import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLogin: false,
    userName: null
  },
  reducers: {
    login(state, action) {
      state.isLogin = true
      state.userName = action.payload
    },

    logout(state) {
      state.isLogin = false
      state.userName = null
    }
  }
})

export const {login, logout} = userSlice.actions
export default userSlice.reducer