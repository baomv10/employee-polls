import { useDispatch, useSelector } from "react-redux";
import { requestAnswerQuestion } from "../../stores/slices/questions.slice";
import { userLoginSelector } from "../../stores/slices/users.slice";

const UnansweredQuestionDetail = ({ question }) => {
  const dispatch = useDispatch();
  const userLogin = useSelector(userLoginSelector);

  const answerQuestion = (question, answer) => {
    dispatch(
      requestAnswerQuestion({
        answer,
        authedUser: userLogin.id,
        qid: question.id,
      })
    );
  };

  return (
    <>
      <div className="text-center">
        <h4>Would You Rather</h4>
      </div>
      <div className="row mt-5">
        <div className="col-6 text-center">
          <div className="border rounded p-1">
            <p> {question?.optionOne?.text}</p>
          </div>
          <div className="d-grid">
            <button
              className="btn btn-success"
              onClick={(e) => answerQuestion(question, "optionOne")}
            >
              Click
            </button>
          </div>
        </div>
        <div className="col-6 text-center">
          <div className="border rounded p-1">
            <p> {question?.optionTwo?.text}</p>
          </div>
          <div className="d-grid">
            <button
              className="btn btn-success"
              onClick={(e) => answerQuestion(question, "optionTwo")}
            >
              Click
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UnansweredQuestionDetail;
