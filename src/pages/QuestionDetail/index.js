import { useParams } from "react-router-dom";
import {
  currentQuestionSelector,
  isAnswerQuestionSuccessSelector,
  requestGetQuestion,
  resetQuestionStore,
} from "../../stores/slices/questions.slice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo } from "react";
import {
  currentUserInfoSelector,
  requestGetUser,
  userLoginSelector,
} from "../../stores/slices/users.slice";
import AnsweredQuestionDetail from "../../components/AnsweredQuestionDetail";
import UnansweredQuestionDetail from "../../components/UnansweredQuestionDetail";

const QuestionDetail = () => {
  const dispatch = useDispatch();
  const { question_id } = useParams();

  const currentQuestion = useSelector(currentQuestionSelector);
  const isAnswerQuestionSuccess = useSelector(isAnswerQuestionSuccessSelector);
  const userLogin = useSelector(userLoginSelector);
  const currentUserInfo = useSelector(currentUserInfoSelector);

  useEffect(() => {
    return () => {
      dispatch(resetQuestionStore());
    };
  }, []);

  useEffect(() => {
    if (!isAnswerQuestionSuccess) return;
    dispatch(requestGetUser({ id: userLogin.id }));
    dispatch(requestGetQuestion({ id: question_id }));
  }, [isAnswerQuestionSuccess]);

  useEffect(() => {
    if (!userLogin) return;
    dispatch(requestGetUser({ id: userLogin.id }));
  }, [userLogin]);

  useEffect(() => {
    if (!question_id) return;
    dispatch(requestGetQuestion({ id: question_id }));
  }, [question_id]);

  const isAnswered = useMemo(() => {
    if (!currentUserInfo || !currentQuestion) return false;
    const answers = Object.keys(currentUserInfo.answers);
    return answers.includes(currentQuestion.id);
  }, [currentUserInfo, currentQuestion]);

  return (
    currentQuestion && (
      <div className="row">
        <div className="text-center">
          <h5>Poll by {currentQuestion?.author}</h5>
          <i className="fs-1 bi bi-person-circle"></i>
        </div>
        {isAnswered ? (
          <AnsweredQuestionDetail question={currentQuestion} />
        ) : (
          <UnansweredQuestionDetail question={currentQuestion} />
        )}
      </div>
    )
  );
};

export default QuestionDetail;
