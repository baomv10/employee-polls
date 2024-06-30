import { all } from "redux-saga/effects";
import usersSaga from "./users.saga";
import questionsSaga from "./questions.saga";
export default function* rootSaga() {
  yield all([usersSaga(), questionsSaga()]);
}
