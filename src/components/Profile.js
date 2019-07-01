import React from 'react'
import UserList from './UserList'
import Auth from '../modules/Auth'


class Profile extends React.Component {
  state = {
    userInfo: {
      user: {
        username: '',
        avatar: '',
        name: '',
        email: ''
      }
    },
    userIsLoaded: false
  }
  componentDidMount() {
    fetch('http://localhost:3004/profile', {
      method: 'GET',
      headers: {
        token: Auth.getToken(),
        Authorization: `Token ${Auth.getToken()}`
      }
    }).then(res => res.json()).then(userInfo => this.setState({userInfo:userInfo}))
    .catch(err=>console.log(err))

  }
  render() {
    return (<div>
      <aside className="profile-card">
        <header>
          <img src={this.state.userInfo.user.avatar} alt="Avatar"/>
          <h1 className="title">{this.state.userInfo.user.username}</h1>
          <h2>{this.state.userInfo.user.name}</h2>
        </header>
        <div className="profile-bio">
          <p>{this.state.userInfo.user.email}</p>
          <div></div>
        </div>
      </aside>
      <UserList/>
    </div>)
  }
}

export default Profile
