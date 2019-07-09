import React, { Component, Fragment } from "react";
import api from "../../services/api";
import { Link } from 'react-router-dom';

export default class ListFriends extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: 'Chat Legal',
            friends: []
        };
    }
    componentDidMount(){
        this.setState({friends: this.props.friends});
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
        return (
            <Fragment>
        
            <div className="listFriends">
                <h3> Lista de amigos </h3> 
            {(this.props.friends.length &&
            this.props.friends.map((item, key) => {
              
                    return (
                       
                            <li className="enviada" key={key}><Link to={`/friends/chat/${item._id}`} params={{recipient :  item._id}} >{item.user}</Link></li>   
                                    
                    );
               
            })) || <div>0 amigos adicionados</div>
            }
           </div>
           </Fragment>
        );
    }
}
