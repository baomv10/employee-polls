import { useEffect, useState } from "react";
import {
  isAddQuestionSuccessSelector,
  requestAddQuestion,
  resetQuestionStore,
} from "../../stores/slices/questions.slice";
import { userLoginSelector } from "../../stores/slices/users.slice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddQuestion = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [firstOption, setFirstOption] = useState();
  const [secondOption, setSecondOption] = useState();
  const [isSubmitted, setSubmitted] = useState(false);

  const userLogin = useSelector(userLoginSelector);
  const isAddQuestionSuccess = useSelector(isAddQuestionSuccessSelector);

  useEffect(() => {
    return () => {
      dispatch(resetQuestionStore());
    };
  }, []);

  useEffect(() => {
    if (isAddQuestionSuccess) {
      return navigate("/");
    }
  }, [isAddQuestionSuccess]);

  const submit = () => {
    setSubmitted(true);
    if (!firstOption || !secondOption) return;

    dispatch(
      requestAddQuestion({
        optionOneText: firstOption,
        optionTwoText: secondOption,
        author: userLogin.id,
      })
    );
  };
  return (
    <div className="row mt-5">
      <div className="text-center">
        <h4>Would You Rather</h4>
        <h6>Create Your Own Poll</h6>
      </div>
      <div>
        {isSubmitted && !firstOption && (
          <p data-testid="error-user" className="text-danger">
            First Option is required.
          </p>
        )}
        {isSubmitted && !secondOption && (
          <p data-testid="error-password" className="text-danger">
            Second Option is required.
          </p>
        )}
      </div>
      <div className="my-3">
        First Option
        <input
          className="form-control"
          onChange={(e) => setFirstOption(e.target.value)}
        />
      </div>
      <div className="mb-3">
        Second Option
        <input
          className="form-control"
          onChange={(e) => setSecondOption(e.target.value)}
        />
      </div>

      <div>
        <button className="btn btn-primary" onClick={submit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddQuestion;
