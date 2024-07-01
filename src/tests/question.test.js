import {
  _getQuestion,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from "../_DATA";

describe("Questions", () => {
  it("_getQuestion: should return result correctly", async () => {
    const id = "vthrdm985a262al8qx3do";
    var result = await _getQuestion({ id });
    expect(result.id).toEqual(id);
  });

  it("_getQuestion: should throw error", async () => {
    const id = "123";
    await expect(_getQuestion(id)).rejects.toEqual("Not Found");
  });

  it("_getQuestions: should return result correctly", async () => {
    var result = await _getQuestions();
    expect(result).not.toBeNull();
  });

  it("_saveQuestion: should return result correctly", async () => {
    const param = {
      optionOneText: "Test 1",
      optionTwoText: "Test 2",
      author: "zoshikanlu",
    };
    var result = await _saveQuestion(param);
    expect(result).not.toBeNull();
    expect(result.optionOne.text).toEqual("Test 1");
    expect(result.optionTwo.text).toEqual("Test 2");
    expect(result.author).toEqual("zoshikanlu");
  });

  it("_saveQuestion: should return error", async () => {
    const param = {
      optionOneText: "",
      optionTwoText: "",
      author: "zoshikanlu",
    };
    await expect(_saveQuestion(param)).rejects.toEqual(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });

  it("_saveQuestionAnswer: should return result correctly", async () => {
    const param = {
      answer: "optionTwo",
      qid: "xj352vofupe1dqz9emx13r",
      authedUser: "zoshikanlu",
    };
    var result = await _saveQuestionAnswer(param);
    expect(result).toEqual(true);
  });

  it("_saveQuestionAnswer: should return error", async () => {
    const param = {
      answer: "",
      qid: "",
      authedUser: "",
    };
    await expect(_saveQuestionAnswer(param)).rejects.toEqual(
      "Please provide authedUser, qid, and answer"
    );
  });
});
