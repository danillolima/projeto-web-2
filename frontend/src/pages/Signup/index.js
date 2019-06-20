import React, { Fragment } from "react";
import Header from "../../components/Header";
import Form from "../../components/SignupForm";
//import "./styles.css";
const Signup = () => {
  return (
    <Fragment>
      <Header />
      <h1>Página de cadastro</h1>
      <Form/>
    </Fragment>
  );
};
export default Signup;