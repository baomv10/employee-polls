import { put, takeLatest, call } from "redux-saga/effects";
import {
  loginSuccess,
  requestLogin,
  loginFail,
  getAllUsersSuccess,
  getAllUsersFail,
  requestGetAllUsers,
  getUserSuccess,
  getUserFail,
  requestGetUser,
} from "../slices/users.slice";
import { _getUser, _getUsers, _login } from "../../_DATA";

function* login(data) {
  try {
    let result = yield call(_login, data.payload);
    yield put(loginSuccess(result));
  } catch (error) {
    yield put(loginFail(error));
  }
}

function* getAllUsers() {
  try {
    let result = yield call(_getUsers);
    yield put(getAllUsersSuccess(result));
  } catch (error) {
    yield put(getAllUsersFail(error));
  }
}

function* getUser(data) {
  try {
    let result = yield call(_getUser, data.payload);
    yield put(getUserSuccess(result));
  } catch (error) {
    yield put(getUserFail(error));
  }
}

export default function* usersSaga() {
  yield takeLatest(requestLogin().type, login);
  yield takeLatest(requestGetAllUsers().type, getAllUsers);
  yield takeLatest(requestGetUser().type, getUser);
}
