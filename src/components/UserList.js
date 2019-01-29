import React from 'react'
import Auth from '../modules/Auth'
import {Link } from 'react-router-dom'

class UserList extends React.Component{
  state ={
    UserList: [],
    auth: Auth.isUserAuthenticated(),
    UserListLoaded: false,
    friendList:[]
  }

  componentDidMount(){
    fetch("http://localhost:3004/users")
    .then(res => res.json())
    .then(users => this.setState({
      UserList: users,
      UserListLoaded: true
    }))
  }

  addFriend = (e,userObj) =>{
    console.log(userObj)
    let newFriends = [...this.state.friendList, userObj]
    this.setState({
      friendList: newFriends
    })
  }


  renderFriends = ()=>{
    return this.state.friendList.map(friend =>{
      return(
        <div className="friendLabel" key={friend.id}>
          <h2>{friend.username}</h2>
          <Link to="/chatapp" className='btn'>Start Conversation</Link>
        </div>
      )
    })
  }

  renderUser = ()=>{
    return this.state.UserList.map(user =>{
      return(
        <div className="userLabel" key={user.id}>
          <h2>{user.username}</h2>
          <button className='btn' onClick={(e)=>this.addFriend(e,user)}>Add Friend</button>
        </div>
      )
    })
  }


  render(){
    console.log(this.state.friendList)
    return(
      <div className= "user-list">
      <h1>User List:</h1>
      {this.state.UserListLoaded
      ? this.renderUser()
      : <p>...loading</p>}
      <h1>Friend List:</h1>
       {this.renderFriends()}
      </div>
    )
  }
}

export default UserList
