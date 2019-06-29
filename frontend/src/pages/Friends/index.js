import React, { Fragment } from "react"; // Novo elemento importado { Fragment }
import Header from "../../components/Header"; // Importação do Header
import Chat from "../../components/Chat";
import ListFriends from "../../components/ListFriends";
//import Search from "../../components/Search";
import Result from "../../components/Result";
import './styles.css';

class Friends extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      rota: null,
      id: null
    }
  }

  componentWillMount() {
    this.setState({id: this.props.match.params.id,
                  rota: this.props.match.params.rota  }) 
  }

    render(){
      let content;
      if(this.props.match.params.rota === 'chatWith' && this.props.match.params.id != null){
        content = <Chat user={this.props.user} recipient={this.props.match.params.id}/>;
      }
      else if(this.props.match.params.rota === 'search' && this.props.match.params.id != null){
        content = <Result term={this.props.match.params.id} user={this.props.user} />
      }
      console.log(this.props.match.params.id);
      
    return (
    <Fragment>
      <Header user={this.props.user}  history={this.props.history}/>

      <div className="friends">
          <ListFriends user={this.props.user} recipient={this.props.match.params.id}/>
          {content}  
      </div>
    </Fragment>
  );
};
}
export default Friends;

