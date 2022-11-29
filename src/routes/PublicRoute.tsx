import { Navigate } from "react-router-dom";

export default function PublicRoute(props: any) {
  const token = localStorage.getItem("token");
  if (token) {
    return <Navigate to="/dashboard" replace />;
  }
  return props.children;
}
