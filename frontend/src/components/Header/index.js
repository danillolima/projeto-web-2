import React from 'react';
import './style.css';
import '../../services/api'
import api from '../../services/api';
import Search from '../../components/Search';
import { Link } from 'react-router-dom';

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
                             <li><Link to="/">início</Link></li>
                            <li><Link to="/signup">cadastro</Link></li> 
                        </ul>):
                        (<ul>
                           
                            <li><Link to="/friends">amigos</Link> </li>
                            <li><Link to="/" onClick={this.logout}>sair</Link></li>
                        </ul>)
                    }
                </nav>
                {this.props.user != null &&
                    <Search history={this.props.history}/> 
                }      
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
