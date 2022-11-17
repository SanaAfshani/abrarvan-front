import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import styled from "styled-components";
import { loginApi } from "../../api/api_auth";
import { useNavigate } from "react-router-dom";

const Div = styled.div`
  width: 100%;
`;
const Input = styled.input`
  width: 410px;
  height: 40px;
  margin: 9px 0 25px;
  border-radius: 4px;
  border: solid 1px #ddd;
  background-color: #fff;
  outline: 0;
`;
const Button = styled.button`
  width: 100%;
`;
const validationSchema = yup.object().shape({
  email: yup.string().email("Invalid email address").required("Required field"),
  password: yup
    .string()
    .min(8, "Must be at least 8 characters")
    .required("Required field"),
});
export const LoginForm = () => {
  //redirect to dashboard page
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      loginApi(
        { user: { email: values.email, password: values.password } },
        (isOk, data) => {
          localStorage.setItem("email", data.user.email);
          localStorage.setItem("username", data.user.username);
          localStorage.setItem("token", data.user.token);
          navigate("/articles");
        }
      );
    },
  });

  return (
    <Div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="input-email">Email</label>
        <Input
          id="input-email"
          name="email"
          type="email"
          placeholder="Email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && (
          <small id="email" class="form-text text-danger">
            {formik.errors.email}
          </small>
        )}
        <label htmlFor="input-password">password</label>
        <Input
          id="input-password"
          name="password"
          type="password"
          placeholder="Password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password && (
          <small id="passwordHelpBlock" class="form-text text-danger">
            {formik.errors.password}
          </small>
        )}
        <Button className="btn btn-primary" type="submit">
          Login
        </Button>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span>Don’t have account?</span>
          <button
            className="btn font-weight-bold"
            onClick={()=>navigate("/register")}
          >
            Register Now
          </button>
        </div>
      </form>
    </Div>
  );
};
