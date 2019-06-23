import React, { Fragment } from "react"; // Novo elemento importado { Fragment }
import Header from "../../components/Header"; // Importação do Header
import Login from "../../components/LoginForm";
import './style.css';

const Main = () => {
  return (
    <Fragment>
      <Header />
      <div className="login">
        <Login />
      </div>
      
    </Fragment>
  );
};
export default Main;