import { Button } from "@mui/material";
import React from "react";
import TermAndConditions from "../../components/TermAndConditions";

export default function Profile() {
  const [openTerms, setOpenTerms] = React.useState(false);

  return (
    <div style={{ marginTop: "60px" }}>
      <div style={{ padding: "30px" }}>
        <div className="row" style={{ textAlign: "center" }}>
          <div>
            <img
              className="rounded-circle"
              style={{ width: "70px", height: "70px" }}
              alt="avatar1"
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
            />
          </div>
          <div>
            <span style={{ fontSize: "20px", fontWeight: "600" }}>
              User Token :{" "}
            </span>{" "}
            <span>{localStorage.getItem("token")}</span>
          </div>
          <div>
            <span style={{ fontSize: "20px", fontWeight: "600" }}>
              Username :{" "}
            </span>{" "}
            <span>Did not get in login api</span>{" "}
          </div>
          <div>
            <span style={{ fontSize: "20px", fontWeight: "600" }}>
              User Email :
            </span>{" "}
            <span>Did not get in login api</span>
          </div>
        </div>
        <div style={{ textAlign: "center", paddingTop: "50px" }}>
          <Button
            size="large"
            variant="contained"
            onClick={() => setOpenTerms(true)}
            style={{ width: "150px" }}
          >
            See T&C
          </Button>
        </div>
        <TermAndConditions
          open={openTerms}
          handleAcceptTerms={() => setOpenTerms(false)}
          handleCancelTerms={() => setOpenTerms(false)}
        />
      </div>
    </div>
  );
}
