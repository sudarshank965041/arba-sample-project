import { Navigate } from "react-router-dom";

export default function ProtectedRoute(props: any) {
  const user = localStorage.getItem("token");

  if (!user) {
    return <Navigate to="/" replace />;
  }
  return props.children;
}
