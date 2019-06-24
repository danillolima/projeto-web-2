import React, { Fragment } from "react"; // Novo elemento importado { Fragment }
import Header from "../../components/Header"; // Importação do Header
import Login from "../../components/LoginForm";
import './style.css';

class Main extends React.Component {
  //component
  //let history = this.props.history;
  constructor(props) {
    super(props)
  }
    render(){
    return (
      <Fragment>
        <Header history={this.props.history}/>
        <div className="login">
          <Login history={this.props.history}/>
        </div>
      </Fragment>
    );
  }
};
export default Main;