import React, { Component, Fragment } from "react";
import api from "../../services/api";

export default class ListFriends extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: 'Chat Legal',
            messages: []
        };
    }
    componentDidMount(){
        this.getMessages();
    }
    getMessages = async () =>{
        console.log(this.props.user);
        api.post('/api/users/friends', {
            user: this.props.user
          })
          .then(response => {
            if(response.status === 200) {
              this.setState({messages: response.data})
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
        return (
            <Fragment>
        
            <div className="listFriends">
                <h3> Lista de amigos </h3> 
            {(this.state.messages.length &&
            this.state.messages.map((item, key) => {
               return (
                    <li className="enviada" key={key}><a href={`/friends/chatWith/${item._id}`}>{item.user}</a></li>            
               );
            })) || <div>Carregando...</div>
            }
           </div>
           </Fragment>
        );
    }
}
