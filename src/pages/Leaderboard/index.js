import { useDispatch, useSelector } from "react-redux";
import {
  allUsersSelector,
  requestGetAllUsers,
} from "../../stores/slices/users.slice";
import { useEffect, useMemo } from "react";

const Leaderboard = () => {
  const dispatch = useDispatch();
  const allUsers = useSelector(allUsersSelector);

  const leaderboardData = useMemo(() => {
    if (!allUsers) return [];
    const result = Object.values(allUsers);
    result.sort(
      (a, b) =>
        Object.keys(b.answers).length - Object.keys(a.answers).length ||
        b.questions.length - a.questions.length
    );
    return result;
  }, [allUsers]);

  useEffect(() => {
    dispatch(requestGetAllUsers());
  }, []);

  return (
    <>
      <table className="table border mt-5">
        <thead>
          <tr className="table-secondary">
            <th scope="col">Users</th>
            <th scope="col">Answered</th>
            <th scope="col">Created</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData?.map((user) => (
            <tr key={user.id}>
              <td>
                <div className="d-flex align-items-center">
                  <i className={"fs-1 " + user.avatarURL}></i>
                  <div className="ms-2">
                    <span className="fw-normal">{user.name}</span>
                    <br />
                    <span className="fw-light">{user.id}</span>
                  </div>
                </div>
              </td>
              <td>{Object.keys(user.answers)?.length}</td>
              <td>{user.questions?.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Leaderboard;
