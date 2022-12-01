import React from "react";
import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  FormHelperText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import messagePopup from "../../services/message-popup";

export default function Register() {
  const navigate = useNavigate();
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    showPassword: false,
    showConfirmPassword: false,
    username: "",
    fullname: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = React.useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const validate = (name: string, value: any) => {
    switch (name) {
      case "email":
        if (!value) {
          setErrors({
            ...errors,
            email: "Email required",
          });
        } else if (
          !new RegExp(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ).test(value)
        ) {
          setErrors({
            ...errors,
            email: "Enter a valid email address",
          });
        } else {
          setErrors({ ...errors, email: "" });
        }
        break;
      case "password":
        if (
          !new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(value)
        ) {
          setErrors({
            ...errors,
            password:
              "Password should contains atleast 8 charaters and containing uppercase,lowercase and numbers",
          });
        } else {
          setErrors({ ...errors, password: "" });
        }
        break;

      case "confirmPassword":
        if (values.password !== value) {
          setErrors({
            ...errors,
            confirmPassword: "Password should match.",
          });
        } else {
          setErrors({ ...errors, confirmPassword: "" });
        }
        break;

      default:
        break;
    }
  };

  const handleChange = (event: any) => {
    event.persist();

    let name = event.target.name;
    let val = event.target.value;
    validate(name, val);

    setValues({
      ...values,
      [name]: val,
    });
  };

  const validateBeforeSubmit = (event: any) => {
    if (event) event.preventDefault();
    let hasError = true;
    for (const item of Object.entries(errors)) {
      if (item) {
        hasError = false;
        break;
      }
    }
    return hasError;
  };

  const handleLoginClick = async (e: any) => {
    const isValid = validateBeforeSubmit(e);
    if (isValid) {
      messagePopup("", "User created successfully", "success");
    }
  };
  return (
    <section className="vh-100">
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
                            style={{ width: "70px", height: "70px" }}
                            alt="avatar1"
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
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
                            Username
                          </InputLabel>
                          <Input
                            id="standard-username"
                            type="text"
                            value={values.username || ""}
                            name="username"
                            onChange={handleChange}
                          />
                        </FormControl>
                      </div>
                      <div className="form-group mb-4">
                        <FormControl fullWidth variant="standard">
                          <InputLabel htmlFor="standard-fullname">
                            Fullname
                          </InputLabel>
                          <Input
                            id="standard-fullname"
                            type="text"
                            value={values.fullname || ""}
                            name="fullname"
                            onChange={handleChange}
                          />
                        </FormControl>
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
                            name="email"
                            error={!!errors.email}
                            onChange={handleChange}
                          />
                          <FormHelperText error={!!errors.email}>
                            {errors.email}
                          </FormHelperText>
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
                            name="password"
                            error={!!errors.password}
                            onChange={handleChange}
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
                          <FormHelperText error={!!errors.password}>
                            {errors.password}
                          </FormHelperText>
                        </FormControl>
                      </div>

                      <div className="form-group mb-4">
                        <FormControl fullWidth variant="standard">
                          <InputLabel htmlFor="standard-adornment-confirmPassword">
                            Confirm Password
                          </InputLabel>
                          <Input
                            id="standard-adornment-password"
                            type={
                              values.showConfirmPassword ? "text" : "password"
                            }
                            value={values.confirmPassword || ""}
                            name="confirmPassword"
                            onChange={handleChange}
                            error={!!errors.confirmPassword}
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={() => {
                                    setValues((prevVal: any) => ({
                                      ...prevVal,
                                      showConfirmPassword:
                                        !prevVal.showConfirmPassword,
                                    }));
                                  }}
                                >
                                  {values.showConfirmPassword ? (
                                    <VisibilityOff />
                                  ) : (
                                    <Visibility />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            }
                          />
                          <FormHelperText error={!!errors.confirmPassword}>
                            {errors.confirmPassword}
                          </FormHelperText>
                        </FormControl>
                      </div>

                      <div className="mb-4">
                        <button
                          type="submit"
                          className="btn btn-primary"
                          style={{ width: "100%" }}
                          onClick={handleLoginClick}
                        >
                          Register
                        </button>
                      </div>

                      <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                        Already have an account?{" "}
                        <a
                          onClick={() => {
                            navigate("/");
                          }}
                          style={{ color: "#393f81", cursor: "pointer" }}
                        >
                          Login
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
