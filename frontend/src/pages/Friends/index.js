import React, { Fragment } from "react"; // Novo elemento importado { Fragment }
import Header from "../../components/Header"; // Importação do Header
import Chat from "../../components/Chat";
import ListFriends from "../../components/ListFriends";

import './styles.css';
class Friends extends React.Component {
  constructor(props) {
    super(props)
  }
    render(){
    return (
    <Fragment>
      <Header user={this.props.user} />
      <div className="friends">
          <ListFriends user={this.props.user}/>
          <Chat />
      </div>
    </Fragment>
  );
};
}
export default Friends;