import { Button, Checkbox, Input } from "antd";
import React from "react";
import { withFormik, Form } from "formik";
import { LockOutlined, TwitterOutlined, UserOutlined } from "@ant-design/icons";
import * as Yup from "yup";
import { connect } from "react-redux/es/exports";
import { USER_SIGN_API } from "../../../constants/CyberBugs/CyberBug";
import { signinCyberbugAction } from "../../../actions/CyberBugsAction";
const Login = (props) => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    props;
  console.log(props);

  return (
    <div>
      <div className="wrapper">
        <div className="logo">
          <img
            src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png"
            alt
          />
        </div>
        <div className="text-center mt-4 name">Twitter</div>
        <form className="p-3 mt-3" onSubmit={handleSubmit}>
          <div className="form-field d-flex align-items-center">
            <span className="far fa-user" />

            <input
              onChange={handleChange}
              name="email"
              placeholder="email"
              prefix={<UserOutlined />}
            />
            <div className="text-danger">{errors.email}</div>
          </div>
          <div className="form-field d-flex align-items-center">
            <span className="fas fa-key" />
            <input
              onChange={handleChange}
              name="passWord"
              placeholder="passWord"
              prefix={<LockOutlined />}
            />
          </div>

          <Button className="btn mt-3" htmlType="submit">
            Login
          </Button>
        </form>
        <div className="text-center fs-6">
          <a href="#">Forget password?</a> or <a href="#">Sign up</a>
        </div>
      </div>
    </div>
  );
};

const LoginCyberBugsWithFormik = withFormik({
  mapPropsToValues: () => ({ email: "", password: "" }),
  validationSchema: Yup.object().shape({
    // Validate form field
    email: Yup.string()
      .required("Email is required")
      .min(1, "Email must have min 1 characters"),
  }),
  handleSubmit: ({ email, passWord }, { props, setSubmitting }) => {
    props.dispatch(signinCyberbugAction(email, passWord));
  },

  displayName: "BasicForm",
})(Login);

export default connect()(LoginCyberBugsWithFormik);
