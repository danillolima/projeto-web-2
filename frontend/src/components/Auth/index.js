import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import api from "../../services/api";
export default function Auth(ComponentToProtect) {
  return class extends Component {
    constructor() {
      super();
      this.state = {
        loading: true,
        redirect: false,
        user: null
      };
    }
    componentDidMount() {
        api.get('/api/users/auth', {
      
        })
        .then(resp => {
            if(resp.status === 200){
              this.setState({ user: resp.data.user });
              this.setState({ loading: false });
            }
            else {
              const error = new Error(resp.error);
              throw error;
            }
        })
        .catch(error => {
          console.error(error);
          this.setState({ loading: false, redirect: true });
        });
    }
    render() {
      const { loading, redirect } = this.state;
      if (loading) {
        return null;
      }
      if (redirect) {
        return <Redirect to="/" />;
      }
      return (
        <React.Fragment>
          <ComponentToProtect {...this.props} user={this.state.user} />
        </React.Fragment>
      );
    }
  }
}