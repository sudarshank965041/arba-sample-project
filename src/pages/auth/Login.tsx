import React from "react";
import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import messagePopup from "../../services/message-popup";
import BackdropLoader from "../../services/loader";

export default function Login() {
  const navigate = useNavigate();
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    showPassword: false,
  });
  const [loading, setLoading] = React.useState(false);

  const handleLoginClick = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        body: JSON.stringify({
          username: values.email,
          password: values.password,
        }),
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        if (!res.ok) {
          return res.text().then((text) => {
            throw new Error(text);
          });
        } else {
          return res.json();
        }
      });
      setLoading(false);
      if (response && response.token) {
        localStorage.setItem("token", response.token);
        window.location.reload();
      } else {
        messagePopup("", "Login failed", "error");
      }
    } catch (error: any) {
      setLoading(false);
      messagePopup("", error.message, "error");
    }
  };
  return (
    <section className="vh-100">
      <BackdropLoader open={loading} />
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                    alt="login form"
                    className="img-fluid"
                    style={{ borderRadius: "1rem 0 0 1rem" }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form style={{ padding: "0 60px" }}>
                      <div
                        className="align-items-center mb-3 pb-1"
                        style={{ textAlign: "center" }}
                      >
                        <div>
                          <img
                            className="rounded-circle"
                            style={{ width: "70px" }}
                            alt="avatar1"
                            src="https://mdbcdn.b-cdn.net/img/new/avatars/9.webp"
                          />
                        </div>
                        <p className="h3 fw-bold mb-0">App Name</p>
                        <p className="mb-0">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                        </p>
                      </div>

                      <div className="form-group mb-4">
                        <FormControl fullWidth variant="standard">
                          <InputLabel htmlFor="standard-email">
                            Email
                          </InputLabel>
                          <Input
                            id="standard-email"
                            type="text"
                            value={values.email || ""}
                            onChange={(e) => {
                              setValues((prevVal: any) => ({
                                ...prevVal,
                                email: e.target.value,
                              }));
                            }}
                          />
                        </FormControl>
                      </div>
                      <div className="form-group mb-4">
                        <FormControl fullWidth variant="standard">
                          <InputLabel htmlFor="standard-adornment-password">
                            Password
                          </InputLabel>
                          <Input
                            id="standard-adornment-password"
                            type={values.showPassword ? "text" : "password"}
                            value={values.password || ""}
                            onChange={(e) => {
                              setValues((prevVal: any) => ({
                                ...prevVal,
                                password: e.target.value,
                              }));
                            }}
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={() => {
                                    setValues((prevVal: any) => ({
                                      ...prevVal,
                                      showPassword: !prevVal.showPassword,
                                    }));
                                  }}
                                >
                                  {values.showPassword ? (
                                    <VisibilityOff />
                                  ) : (
                                    <Visibility />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            }
                          />
                        </FormControl>
                      </div>

                      <div className="mb-4">
                        <button
                          type="submit"
                          className="btn btn-primary"
                          style={{ width: "100%" }}
                          onClick={handleLoginClick}
                        >
                          Login
                        </button>
                      </div>

                      <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                        Don't have an account?{" "}
                        <a
                          onClick={() => {
                            navigate("/register");
                          }}
                          style={{ color: "#393f81", cursor: "pointer" }}
                        >
                          Sign Up
                        </a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
