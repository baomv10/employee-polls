import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const QuestionCard = ({ question }) => {
  const navigate = useNavigate();

  return (
    <div
      className="col-3 border rounded m-3 p-3 text-center"
      key={question?.id}
    >
      <h5>{question?.author}</h5>
      <p>{format(new Date(question?.timestamp || 0), "h:mm a | MM/dd/yyyy")}</p>
      <div>
        <div className="d-grid">
          <button
            className="btn btn-outline-success"
            onClick={() => navigate(`questions/${question?.id}`)}
          >
            Show
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
