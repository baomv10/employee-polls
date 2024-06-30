import { put, takeLatest, call } from "redux-saga/effects";
import {
  addQuestionFail,
  addQuestionSuccess,
  answerQuestionFail,
  answerQuestionSuccess,
  getAllQuestionsFail,
  getAllQuestionsSuccess,
  getQuestionFail,
  getQuestionSuccess,
  requestAddQuestion,
  requestAnswerQuestion,
  requestGetAllQuestions,
  requestGetQuestion,
} from "../slices/questions.slice";
import {
  _getQuestion,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from "../../_DATA";

function* getAllQuestions() {
  try {
    let result = yield call(_getQuestions);
    yield put(getAllQuestionsSuccess(result));
  } catch (error) {
    yield put(getAllQuestionsFail(error));
  }
}

function* addQuestion(data) {
  try {
    let result = yield call(_saveQuestion, data.payload);
    yield put(addQuestionSuccess(result));
  } catch (error) {
    yield put(addQuestionFail(error));
  }
}

function* answerQuestion(data) {
  try {
    let result = yield call(_saveQuestionAnswer, data.payload);
    yield put(answerQuestionSuccess(result));
  } catch (error) {
    yield put(answerQuestionFail(error));
  }
}

function* getQuestion(data) {
  try {
    let result = yield call(_getQuestion, data.payload);
    yield put(getQuestionSuccess(result));
  } catch (error) {
    yield put(getQuestionFail(error));
  }
}

export default function* questionsSaga() {
  yield takeLatest(requestGetAllQuestions().type, getAllQuestions);
  yield takeLatest(requestAddQuestion().type, addQuestion);
  yield takeLatest(requestAnswerQuestion().type, answerQuestion);
  yield takeLatest(requestGetQuestion().type, getQuestion);
}
