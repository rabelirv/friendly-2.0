import React from 'react'
import {Link } from 'react-router-dom'
import Auth from '../modules/Auth'

class NavBar extends React.Component{
  state={
    auth: Auth.isUserAuthenticated()
  }

  initialNav = ()=>{
    return(
      <div>
      <Link to="/"className='btn'>Home</Link>
      <Link to="/signup"className='btn'>SignUp</Link>
      <Link to="/login"exact className='btn'>Login</Link>
      </div>
    )
  }

  authNav = ()=>{
    return(
      <div>
      <Link to="/profile"className='btn'>Profile</Link>
      <Link to="/takeselfie"className='btn'>Take Selfie!</Link>
      <button className='btn' onClick={this.handleLogout}>Logout</button>
      </div>
    )
  }

  handleLogout = ()=>{
    fetch("http://localhost:3004/logout",{
      method:'DELETE',
      headers: {
        token: Auth.getToken(),
        Authorization: `Token ${Auth.getToken()}`}
    })
    .then(res => {
      Auth.deauthenticateToken();
      this.setState({
        auth: Auth.isUserAuthenticated()
      })
      this.props.endSesion()
    })
    .catch(err => console.log(err))
  }


  render(){
    console.log(this.state.auth)
    return(
      <div>
      {!this.state.auth
      ? this.initialNav()
      : this.authNav()}
  </div>
)
}
}


export default NavBar
