import React, { Fragment } from "react";
import './index.css';

export default class Search extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({term: event.target.value});
    }

    handleSubmit(event){   
        event.preventDefault();
        this.props.history.push(`/friends/search/${this.state.term}`);
        
    }
    render(){
        return (
            <Fragment> 
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Pesquise por um amigo..." value={this.state.term} onChange={this.handleChange} />
                    <input type="submit" value="Buscar" />
                </form>
            </Fragment>
        )
    }
}