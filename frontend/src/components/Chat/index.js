import React, { Component, Fragment } from "react";
import api from "../../services/api";
import './style.css';

export default class Chat extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: 'Chat Legal',
            messages: [],
            message: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({message: event.target.value});
    }

    handleSubmit(event){   
        event.preventDefault();
        api.post('/api/chat/createMessage', {
            sender: this.props.user,
            msg: this.state.message,
            recipient: this.props.recipient
        })
        .then(response => {
            if(response.status === 200) {
                this.setState({ 
                    messages: this.state.messages.concat([this.state.message])
                });
               // this.setState state.messages.push();
            }
        })
        .catch(error => {

        });        
    }
    componentDidMount(){
        this.getMessages();
    }
    getMessages = async () =>{
        console.log(this.props.user);
        api.post('/api/chat/getMessages', {
            sender: this.props.user,
            recipient: this.props.recipient
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

            <div className="chat"> 
           <div className="msgs">
            {(this.state.messages.length &&
            this.state.messages.map((item, key) => {
                if(item.sender === this.props.recipient){
                    return (
                        <p className="received" key={key}><span>{item.message}</span></p>           
                    );
                }
                else{
                    return (
                        <p className="send" key={key}><span> {item.message}</span></p>           
                    );
                }


            })) || <div>Carregando...</div>
            }</div>
                <form onSubmit={this.handleSubmit}>
                   <input type="text"  value={this.state.message} onChange={this.handleChange} />
                   <button id="btnEnviar">Enviar mensagem</button>
               </form>
           </div>
           
           </Fragment>
        );
    }
}
