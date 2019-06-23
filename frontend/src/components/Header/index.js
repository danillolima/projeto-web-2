import React from 'react';
import './style.css';
import '../../services/api'
import api from '../../services/api';
export default class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: 'Chat Legal'
        };
    };
    logout = () => {
        api.get('/api/users/logout');
    };
    render(){
        return (
            <header>
                <h1 className="logo">{this.state.title}</h1>
                <nav className="menu">
               
                    {this.props.user == null ? (
                        <ul>
                            <li><a href="/">início</a></li>
                            <li><a href="/signup">cadastro</a></li> 
                        </ul>):
                        (<ul>
                            <li><a href="/">início</a></li>
                            <li><a href="/friends">amigos</a> </li>
                            <li><a href="/" onClick={this.logout}>sair</a></li>
                        </ul>)
                    }
                     
                
                </nav>
            </header>
            /* <div>
                <h1> Questões de {this.props.title}</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="option" name="option" >Escolha uma alternativa</label> 
                <ul>
                    <li><input type="radio" id="option" /> {this.props.q1} op uma</li>
                </ul>
                    <button onClick="" >Confirmar</button>
                </form>
            </div> */ 
        );
    }
}
