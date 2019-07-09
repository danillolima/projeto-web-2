import React, { Fragment } from "react"; // Novo elemento importado { Fragment }
import Header from "../../components/Header"; // Importação do Header
import Chat from "../../components/Chat";
import ListFriends from "../../components/ListFriends";
//import Search from "../../components/Search";
import Result from "../../components/Result";
import './styles.css';
import api from '../../services/api';

class Friends extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      rota: null,
      id: null, 
      friends: []
    }
  }

  componentWillMount() {
    this.setState({id: this.props.match.params.id,
                  rota: this.props.match.params.rota  });
                  this.getFriends();
  }
  getFriends = async () =>{
    console.log(this.props.user);
    api.post('/api/users/friends', {
        user: this.props.user,
      })
      .then(response => {
        if(response.status === 200) {
          this.setState({friends: response.data})
          console.log(response);
        }
        else {
          console.log(response.error);
        }     
     })
    .catch(error => {
        console.log(error.message);
    });
    }

    render(){
      let content;
      if(this.props.match.params.rota === 'chat' && this.props.match.params.id != null){
        content = <Chat user={this.props.user} recipient={this.props.match.params.id}/>;
      }
      else if(this.props.match.params.rota === 'search' && this.props.match.params.id != null){
        content = <Result term={this.props.match.params.id} user={this.props.user} friends={this.state.friends}/>
      }
      console.log(this.props.match.params.id);
      
    return (
    <Fragment>
      <Header user={this.props.user}  history={this.props.history}/>

      <div className="friends">
          <ListFriends user={this.props.user} recipient={this.props.match.params.id} friends={this.state.friends} />
          {content}  
      </div>
    </Fragment>
  );
};
}
export default Friends;

