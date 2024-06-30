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

const CATEGORIES = [
  { key: "unanswered", title: "Unanswered" },
  { key: "answered", title: "Answered" },
];

const Home = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector(userLoginSelector);
  const allQuestions = useSelector(allQuestionsSelector);
  const currentUserInfo = useSelector(currentUserInfoSelector);
  const [homeData, setHomeData] = useState({});
  useEffect(() => {
    if (!allQuestions || !userLogin || !currentUserInfo) return;
    const answers = Object.keys(currentUserInfo.answers);
    const questions = Object.values(allQuestions);
    const answered = questions.filter((x) => answers.includes(x.id));
    const unanswered = questions.filter((x) => !answers.includes(x.id));

    setHomeData({
      unanswered,
      answered,
    });
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
      {CATEGORIES.map((category) => (
        <div className="card my-5" key={category.key}>
          <div className="card-header text-center">
            <h4>{category.title}</h4>
          </div>
          <div className="card-body">
            <div className="row">
              {homeData[category.key]?.map((question) => (
                <QuestionCard key={question.id} question={question} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Home;
