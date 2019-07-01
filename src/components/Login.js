import '../styles/App.css'
import '../styles/Login.css'
import React from 'react';

class Login extends React.Component {
  state = {
    username: '',
    password: ''
  }

  usernameChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  render() {
    return (<form onSubmit={(e) => this.props.loginSubmitHandler(e, this.state)} className="username-container">
      <h1>FRIENDLY</h1>
      <div>
        <input name="username" onChange={this.usernameChangeHandler} value={this.state.username} placeholder="Enter a username..." required="required"/>
        <br/>
        <input name="password" type="password" onChange={this.usernameChangeHandler} value={this.state.password} placeholder="Enter Password..." required="required"/>
      </div>
      <input type="submit" value="Submit"/>
    </form>)
  }

}
Login.defaultProps = {};

export default Login;
