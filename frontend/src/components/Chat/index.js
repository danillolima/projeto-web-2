import React, { Component, Fragment } from "react";
import api from "../../services/api";
import './style.css';

export default class Chat extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: 'Chat Legal',
            messages: [],
            message: '',
            recipient: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({message: event.target.value});
    }



    handleSubmit = (event) => {   
       
        api.post('/api/chat/message', {
            sender: this.props.user,
            recipient: this.state.recipient,
            msg: this.state.message,
        })
        .then((response) => {
            if(response.status === 200) {
                //console.log(this.state.message);
              //  this.setState({ 
                   //messages: [...this.state.messages, this.state.message]
             //  })
             //this.setState(prevState => ({messages: [...prevState.messages, this.state.message]}));
                this.setState(state => {
                    const messages = state.messages.concat(response.data);
                    return {
                        messages,
                        message: ''
                    };
                })
            }
        })
        .catch(error => {

        });                  
        event.preventDefault();
    };

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "instant" });
    }

    componentWillMount() {
        this.setState({recipient: this.props.recipient});
    }
    
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    componentDidMount(){
        this.getMessages();
        this.scrollToBottom();
        this.interval = setInterval(() => {
            this.getMessages();
          }, 5000);
    }
    componentDidUpdate(){
        this.scrollToBottom();
       if(this.state.recipient !== this.props.recipient){
            this.setState({recipient: this.props.recipient});
            this.getMessages();
            
       }
    }
/* 
    componentWillUpdate(){
        if(this.state.recipient !== this.props.recipient)
            this.setState({recipient: this.props.recipient});
    }*/

    getMessages = () => {
        console.log(this.state.recipient);
        api.get('/api/chat/messages', {
            params:{
                sender: this.props.user,
                recipient: this.props.recipient
            }
          })
          .then(response => {
            if(response.status === 200) {
              this.setState({messages: response.data})
              console.log(response);
            }
            else {
              console.log(response.error);
            }     
            console.log(this.state.recipient);
         })
        .catch(error => {
            console.log(error.message);
        });
    }

    render(){
        
        //let chat = document.querySelector("#lk8");

        //chat.scrollTop = chat.scrollHeight - chat.clientHeight;
        
        return (
            <Fragment>
            <div className="chat" id="lk8"> 
            <div className="msgs" key={this.props.recipient}>
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


            })) || <div>Não foram encontradas mensagens</div>
            }</div>
                <form onSubmit={this.handleSubmit}>
                   <input type="text"  value={this.state.message} onChange={this.handleChange} />
                   <button id="btnEnviar">Enviar mensagem</button>
               </form>
               <div style={{ float:"left", clear: "both" }} ref={(el) => { this.messagesEnd = el; }}></div>
           </div>
           
           </Fragment>
        );
    }
}
