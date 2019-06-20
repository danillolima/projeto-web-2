import React from 'react';

export default class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: 'Chat Legal'
        };
    }
    render(){
        return (
            <header>
                <h1 class="logo">{this.state.title}</h1>
                <nav class="menu">
                <ul>
                    <li><a href="/">início</a></li>
                    <li><a href="/signup">cadastro</a></li>  
                    <li><a href="/friends">amigos</a> </li>
                    <li><a href="/logout">sair</a></li>
                </ul>
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
