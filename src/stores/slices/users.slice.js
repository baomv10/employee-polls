import { createDraftSafeSelector, createSlice } from "@reduxjs/toolkit";
import { USERS } from "../constant";

const initialState = {
  userLogin: null,
  allUsers: null,
  currentUserInfo: null,
  errorLogin: null,
};

const usersSlice = createSlice({
  name: USERS,
  initialState,
  reducers: {
    requestLogin(state) {
      state.userLogin = null;
      state.errorLogin = null;
    },
    loginSuccess(state, action) {
      state.userLogin = action.payload;
      state.errorLogin = null;
    },
    loginFail(state, action) {
      state.userLogin = null;
      state.errorLogin = action.payload;
    },

    requestGetAllUsers(state) {
      state.allUsers = null;
    },
    getAllUsersSuccess(state, action) {
      state.allUsers = action.payload;
    },
    getAllUsersFail(state) {
      state.allUsers = null;
    },

    requestGetUser(state) {
      state.currentUserInfo = null;
    },
    getUserSuccess(state, action) {
      state.currentUserInfo = action.payload;
    },
    getAllUserFail(state) {
      state.currentUserInfo = null;
    },

    logout(state) {
      state.currentUserInfo = null;
      state.userLogin = null;
      state.errorLogin = null;
    },
  },
});
const selectSelf = (state) => state[USERS] || {};
export const userLoginSelector = createDraftSafeSelector(
  selectSelf,
  (state) => state.userLogin
);

export const allUsersSelector = createDraftSafeSelector(
  selectSelf,
  (state) => state.allUsers
);

export const currentUserInfoSelector = createDraftSafeSelector(
  selectSelf,
  (state) => state.currentUserInfo
);

export const errorLoginSelector = createDraftSafeSelector(
  selectSelf,
  (state) => state.errorLogin
);

export const {
  requestLogin,
  loginSuccess,
  loginFail,
  requestGetAllUsers,
  getAllUsersSuccess,
  getAllUsersFail,

  requestGetUser,
  getUserSuccess,
  getUserFail,
  logout,
} = usersSlice.actions;
export default usersSlice.reducer;
