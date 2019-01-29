import '../styles/App.css'
import '../styles/Login.css'

import React from 'react';

// This is the first screen seen by the user. We should display some way for
// them to enter their name and enter the chat room
class Login extends React.Component {
  state = {
    username: '',
    password: ''
  }

  usernameChangeHandler= (e)=> {
    this.setState({ [e.target.name]: e.target.value });
  }
  // usernameSubmitHandler = (e)=> {
  //   e.preventDefault();
  //   this.setState({ submitted: true, username: this.state.username, password: this.state.password });
  // }
  render() {
    return(
      <form onSubmit={(e)=>this.props.loginSubmitHandler(e,this.state)} className="username-container">
      <h1>FRIENDLY</h1>
      <div>
      <input
      name="username"
      onChange={this.usernameChangeHandler}
      value={this.state.username}
      placeholder="Enter a username..."
      required />
      <br/>
      <input
      name="password"
      onChange={this.usernameChangeHandler}
      value={this.state.password}
      placeholder="Enter Password..."
      required />
      </div>
      <input type="submit" value="Submit" />
      </form>

    )
  }

}
Login.defaultProps = {
};

export default Login;
