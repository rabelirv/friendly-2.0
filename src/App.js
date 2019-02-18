import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
import ChatApp from './components/ChatApp';
import Camera from './components/Camera';
import {Switch, Route, Redirect } from 'react-router-dom'
import Auth from './modules/Auth'

class App extends Component {
  state={
    auth: Auth.isUserAuthenticated(),
    username: '',
    selfie:'',
    selfieArr:[]
  }

  grabSelfie=(selfie)=>{
    this.setState({
      selfie:selfie,
      selfieArr:[...this.state.selfieArr,selfie]
    })
    fetch('http://localhost:3004/pictures',{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      picture:{
        selfie:selfie
      }
    })
  })
}

  handleSubmit = (newUser)=>{
    console.log(newUser)
    fetch('http://localhost:3004/users',{
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user:{
        avatar:newUser.avatar,
        email:newUser.email,
        name:newUser.name,
        password:newUser.password,
        username:newUser.username
      }
    })
})
.then(res => res.json())
.then(res =>
  Auth.authenticateToken(res.token),
  this.setState({auth: Auth.isUserAuthenticated()})
)
.catch(err => console.log(err))
}

  loginSubmitHandler= (e, userInfo)=>{
    e.preventDefault()
    console.log(userInfo)
    fetch("http://localhost:3004/login",{
      method: 'POST',
      body: JSON.stringify(userInfo),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(res =>
      Auth.authenticateToken(res.token),
      this.setState({
        auth: Auth.isUserAuthenticated(),
        username: userInfo.username
      })
)
    .catch(err => console.log(err))
  }

  endSesion = ()=>{
    Auth.deauthenticateToken();
    this.setState({
      auth: Auth.isUserAuthenticated()
    })
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <NavBar endSesion ={this.endSesion}/>
        <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/login' render={()=> (this.state.auth) ? <Redirect to = '/profile' /> : <Login loginSubmitHandler={this.loginSubmitHandler}/>}/>
        <Route exact path='/signup' render={()=>(this.state.auth) ? <Redirect to = '/profile' /> : <SignUp handleSubmit={this.handleSubmit}/>}/>
        <Route exact path='/profile' render={()=><Profile/>}/>
        <Route exact path='/chatapp' render={()=><ChatApp username={this.state.username}/>}/>
        <Route exact path='/takeselfie' render={()=><Camera grabSelfie={this.grabSelfie} selfieArr={this.state.selfieArr}/>}/>
        </Switch>

      </div>
    )
  }
}


export default App;
