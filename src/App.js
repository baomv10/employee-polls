import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import AuthRoute from "./components/AuthRoute";
import Layout from "./components/Layout";
import QuestionDetail from "./pages/QuestionDetail";
import AddQuestion from "./pages/AddQuestion";
import Leaderboard from "./pages/Leaderboard";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <AuthRoute>
                <Home />
              </AuthRoute>
            }
          />
          <Route
            path="leaderboard"
            element={
              <AuthRoute>
                <Leaderboard />
              </AuthRoute>
            }
          />
          <Route
            path="add"
            element={
              <AuthRoute>
                <AddQuestion />
              </AuthRoute>
            }
          />
          <Route
            path="questions/:question_id"
            element={
              <AuthRoute>
                <QuestionDetail />
              </AuthRoute>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
