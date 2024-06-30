import { combineReducers } from "@reduxjs/toolkit";
import usersSlice from "./users.slice";
import { QUESTIONS, USERS } from "../constant";
import questionsSlice from "./questions.slice";

const rootReducer = combineReducers({
  [USERS]: usersSlice,
  [QUESTIONS]: questionsSlice,
});

export default rootReducer;
