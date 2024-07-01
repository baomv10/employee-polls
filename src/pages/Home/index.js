import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  currentUserInfoSelector,
  requestGetUser,
  userLoginSelector,
} from "../../stores/slices/users.slice";
import {
  allQuestionsSelector,
  requestGetAllQuestions,
} from "../../stores/slices/questions.slice";
import QuestionCard from "../../components/QuestionCard";

const Home = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector(userLoginSelector);
  const allQuestions = useSelector(allQuestionsSelector);
  const currentUserInfo = useSelector(currentUserInfoSelector);
  const [tabIndex, setTabIndex] = useState(0);
  const [answered, setAnswered] = useState([]);
  const [unanswered, setUnanswered] = useState([]);
  useEffect(() => {
    if (!allQuestions || !userLogin || !currentUserInfo) return;
    const answers = Object.keys(currentUserInfo.answers);
    const questions = Object.values(allQuestions);
    const answered = questions.filter((x) => answers.includes(x.id));
    const unanswered = questions.filter((x) => !answers.includes(x.id));
    setAnswered(answered.sort((a, b) => b.timestamp - a.timestamp));
    setUnanswered(unanswered.sort((a, b) => b.timestamp - a.timestamp));
  }, [allQuestions, currentUserInfo, userLogin]);

  useEffect(() => {
    dispatch(requestGetAllQuestions());
  }, []);

  useEffect(() => {
    if (!userLogin) return;
    dispatch(requestGetUser({ id: userLogin.id }));
  }, [userLogin]);

  return (
    <>
      <ul className="nav nav-tabs mt-5">
        <li className="nav-item">
          <a
            onClick={() => setTabIndex(0)}
            className={"nav-link " + (tabIndex === 0 ? "active" : "")}
            href="#"
          >
            Unanswered
          </a>
        </li>
        <li className="nav-item">
          <a
            onClick={() => setTabIndex(1)}
            className={"nav-link " + (tabIndex === 1 ? "active" : "")}
            href="#"
          >
            Answered
          </a>
        </li>
      </ul>
      <div className="border border-top-0 p-5">
        {tabIndex === 0 && (
          <div className="row">
            {unanswered?.map((question) => (
              <QuestionCard key={question.id} question={question} />
            ))}
          </div>
        )}
        {tabIndex === 1 && (
          <div className="row">
            {answered?.map((question) => (
              <QuestionCard key={question.id} question={question} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
