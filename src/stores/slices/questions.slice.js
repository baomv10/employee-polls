import { createDraftSafeSelector, createSlice } from "@reduxjs/toolkit";
import { QUESTIONS } from "../constant";

const initialState = {
  allQuestions: null,
  currentQuestion: null,
  isAddQuestionSuccess: null,
  isAnswerQuestionSuccess: null,
};

const questionsSlice = createSlice({
  name: QUESTIONS,
  initialState,
  reducers: {
    requestGetAllQuestions(state) {
      state.allQuestions = null;
    },
    getAllQuestionsSuccess(state, action) {
      state.allQuestions = action.payload;
    },
    getAllQuestionsFail(state) {
      state.allQuestions = null;
    },

    requestAddQuestion(state) {
      state.isAddQuestionSuccess = null;
    },
    addQuestionSuccess(state, action) {
      state.isAddQuestionSuccess = action.payload;
    },
    addQuestionFail(state) {
      state.isAddQuestionSuccess = false;
    },

    requestAnswerQuestion(state) {
      state.isAnswerQuestionSuccess = null;
    },
    answerQuestionSuccess(state, action) {
      state.isAnswerQuestionSuccess = action.payload;
    },
    answerQuestionFail(state) {
      state.isAnswerQuestionSuccess = false;
    },

    requestGetQuestion(state) {
      state.currentQuestion = null;
    },
    getQuestionSuccess(state, action) {
      state.currentQuestion = action.payload;
    },
    getQuestionFail(state) {
      state.currentQuestion = null;
    },

    resetQuestionStore(state) {
      state.isAnswerQuestionSuccess = null;
      state.isAddQuestionSuccess = null;
    },
  },
});
const selectSelf = (state) => state[QUESTIONS] || {};
export const allQuestionsSelector = createDraftSafeSelector(
  selectSelf,
  (state) => state.allQuestions
);

export const isAddQuestionSuccessSelector = createDraftSafeSelector(
  selectSelf,
  (state) => state.isAddQuestionSuccess
);

export const isAnswerQuestionSuccessSelector = createDraftSafeSelector(
  selectSelf,
  (state) => state.isAnswerQuestionSuccess
);

export const currentQuestionSelector = createDraftSafeSelector(
  selectSelf,
  (state) => state.currentQuestion
);

export const {
  requestGetAllQuestions,
  getAllQuestionsSuccess,
  getAllQuestionsFail,
  requestAddQuestion,
  addQuestionSuccess,
  addQuestionFail,
  requestAnswerQuestion,
  answerQuestionSuccess,
  answerQuestionFail,
  requestGetQuestion,
  getQuestionSuccess,
  getQuestionFail,
  resetQuestionStore,
} = questionsSlice.actions;
export default questionsSlice.reducer;