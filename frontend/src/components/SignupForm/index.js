import React from 'react';
import api from '../../sevices/api';

export default class SignupForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: 'Chat Legal',
            user: '',
            mail: '',
            pass: '',
            messages: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  

    handleChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
       
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        let self = this;
        api.post('users/create',{
            user: this.state.user,
            mail: this.state.mail,
            pass: this.state.pass,
        })
        .then(function (response){
            self.setState({messages: response.data});
            
            console.log(response.data);       
        })
        .catch(function(error){
            self.setState({messages: error.data});
            console.log(error.data);
        });
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <ul>
                {(this.state.messages.length &&
                    this.state.messages.map((item, key) => {
                    return (
                            <li key={key}>{item.message}</li>            
                    );
                    })) || <div>Carregando...</div>
                }   </ul>
                </div>
                <legend> </legend>   
                    <label for="user">Usuário:</label>
                    <input name="user" value={this.state.user} onChange={this.handleChange} type="text" />
                    <label for="mail" >E-mail:</label>
                    <input name="mail" value={this.state.mail} onChange={this.handleChange} type="email" />
                    <label for="pass">Senha:</label>
                    <input name="pass" value={this.state.pass} onChange={this.handleChange} type="password" />
                    <input type="submit" value="Cadastrar" />
            </form>
    );
    }
}
