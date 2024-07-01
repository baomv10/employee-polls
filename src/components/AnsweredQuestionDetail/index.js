import { useMemo } from "react";
import { useSelector } from "react-redux";
import { userLoginSelector } from "../../stores/slices/users.slice";

const AnsweredQuestionDetail = ({ question }) => {
  const userLogin = useSelector(userLoginSelector);

  const optionPercentage = useMemo(() => {
    if (!question) return 0;
    const optionOne = question.optionOne.votes.length;
    const optionTwo = question.optionTwo.votes.length;
    const total = optionOne + optionTwo;
    const result = {
      optionOne: ((optionOne / total) * 100).toFixed(0),
      optionTwo: ((optionTwo / total) * 100).toFixed(0),
    };
    return result;
  }, [question]);

  const selectVoted = (usersVoted = []) => {
    return usersVoted?.includes(userLogin?.id);
  };
  
  return (
    <div className="row mt-5">
      <div className="col-6 text-center">
        <div
          className={
            "border rounded p-1 " +
            (selectVoted(question?.optionOne.votes)
              ? "bg-success-subtle text-success"
              : "")
          }
        >
          <p> {question?.optionOne?.text}</p>
        </div>
        <p>{question?.optionOne.votes.length}</p>
        <p>{optionPercentage.optionOne}%</p>
      </div>
      <div className="col-6 text-center">
        <div
          className={
            "border rounded p-1 " +
            (selectVoted(question?.optionTwo.votes)
              ? "bg-success-subtle text-success"
              : "")
          }
        >
          <p> {question?.optionTwo?.text}</p>
        </div>
        <p>{question?.optionTwo.votes.length}</p>
        <p>{optionPercentage.optionTwo}%</p>
      </div>
    </div>
  );
};

export default AnsweredQuestionDetail;
