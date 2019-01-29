import React from 'react'


class SignUp extends React.Component{
  state = {
    name:'',
    username:'',
    email:'',
    avatar:'',
    password:''
  }

  handleChange = (e)=>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit =(e)=>{
    e.preventDefault()
    this.props.handleSubmit(this.state)
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit} className="signup-container">
      <h1>SignUp</h1>
      <div>
      <input name= "name" placeholder='name'onChange={this.handleChange} value={this.state.name}/>
      <br/>
      <input name= "username" placeholder='username'onChange={this.handleChange} value={this.state.username}/>
      <br/>
      <input name= "email" placeholder='email' onChange={this.handleChange} value={this.state.email}/>
      <br/>
      <input name= "avatar" placeholder='avatar' onChange={this.handleChange} value={this.state.avatar}/>
      <br/>
      <input name= "password" type='password' placeholder='password'onChange={this.handleChange} value={this.state.password}/>
      <br/>
      </div>
      <input type='submit'className='btn'/>
      </form>
    )
  }
}

export default SignUp
