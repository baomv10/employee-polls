import { useMemo } from "react";

const AnsweredQuestionDetail = ({ question }) => {
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

  return (
    <>
      <div className="col-6 text-center">
        <div className="border rounded p-1">
          <p> {question?.optionOne?.text}</p>
        </div>
        <p>{question?.optionOne.votes.length}</p>
        <p>{optionPercentage.optionOne}%</p>
      </div>
      <div className="col-6 text-center">
        <div className="border rounded p-1">
          <p> {question?.optionTwo?.text}</p>
        </div>
        <p>{question?.optionTwo.votes.length}</p>
        <p>{optionPercentage.optionTwo}%</p>
      </div>
    </>
  );
};

export default AnsweredQuestionDetail;
