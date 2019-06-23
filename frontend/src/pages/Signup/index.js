import React, { Fragment } from "react";
import Header from "../../components/Header";
import Form from "../../components/SignupForm";
import "./style.css";

const Signup = () => {
  return (
    <Fragment>
      <Header />
      <div className="signup">
        <h1>Página de cadastro</h1>
        <Form/>
      </div>
    </Fragment>
  );
};
export default Signup;