import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function NoMatch() {
  let location = useLocation();
  const navigate = useNavigate();

  return (
    <div style={{ padding: "45px" }}>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
      <button
        onClick={() => {
          navigate("/");
        }}
        style={{ color: "#393f81", cursor: "pointer" }}
      >
        Go back
      </button>
    </div>
  );
}
