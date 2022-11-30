import { Routes, Route } from "react-router-dom";
import NoMatch from "../components/NoMatch";
import Header from "../layouts/Header";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import CodeChallenge from "../pages/dashboard/CodeChallenge";
import Dashboard from "../pages/dashboard/Dashboard";
import Profile from "../pages/dashboard/Profile";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

export default function index() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path="register"
        element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        }
      />
      <Route
        path="dashboard"
        element={
          <ProtectedRoute>
            <Header />
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="profile"
        element={
          <ProtectedRoute>
            <Header />
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route
        path="code-challenge"
        element={
          <ProtectedRoute>
            <Header />
            <CodeChallenge />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}
