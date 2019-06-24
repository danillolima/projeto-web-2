import React, { Fragment } from "react";
//import './index.css';
import api from '../../services/api';

export default class Search extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            last: '',
            results: []
        }
    }

    getFriends(){
        api.get(`/api/users/search?q=${this.props.term}&user=${this.props.user}`)
        .then(response => {
            if(response.status === 200) {

              console.log('AA:'+ response.data);
              this.setState({results: response.data});
            }      
        })
        .catch(error => {
            console.log(error.message);
        });
    }
    addUser(id){
        api.get(`/api/users/add?id=${id}&user=${this.props.user}`)
        .then(response => {
            if(response.status === 200) {

              console.log('Result from add  :'+ response.data);
              this.setState({results: response.data});
            }      
        })
        .catch(error => {
            console.log(error.message);
        });
    }
    componentDidMount(){
        this.getFriends();
        this.setState({last: this.props.term});
    }
    componentDidUpdate(){
        if(this.state.last != this.props.term){
            this.getFriends();
            this.setState({last: this.props.term});
        }
    }
    
    render(){
        
        return (
            <Fragment>
                <div className="content">
                    <h2>Termo buscado: {this.props.term}</h2> 
             
                    {(this.state.results.length &&
            this.state.results.map((item, key) => {
               return (
                    <li className="enviada" key={key}>{item.user} <button onClick={(e) => this.addUser(item._id, e)}>Adicionar</button></li>            
               );
            })) || <div>Nada encontrado</div>
            }
              
                </div>
            </Fragment>
        )
    }
}