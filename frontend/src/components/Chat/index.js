import React, { Component, Fragment } from "react";
import api from "../../services/api";

export default class Chat extends Component{
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
        //const response = await api.post();
        //this.setState({messages: response.data});
    }
    render(){
        return (
            <Fragment>
           <div className="chat"> 
            {(this.state.messages.length &&
            this.state.messages.map((item, key) => {
               return (
                    <div class="enviada" key={key}>{item.message}</div>            
               );
            })) || <div>Carregando...</div>
            }
                <form>
                   
                    <input type="text" name="msg"/>
                    <button>Enviar mensagem</button>
                    
                </form>
           </div>
           </Fragment>
        );
    }
}
