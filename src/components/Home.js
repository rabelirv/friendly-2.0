import React from 'react'
import '../styles/Home.css'
import img from '../img/logo-white.png'
import {Link } from 'react-router-dom'

class Home extends React.Component {

  render(){
    return(
      <div>
      <header className='header'>
            <div className="header__logo-box">
            <img src= {img} alt="Logo" className="header__logo"/>
            </div>
            <div className="header__text-box">
              <h1 className="heading-primary">
                <span className="heading-primary--main">Friendly</span>
                <span className="heading-primary--sub">Where life happens</span>
              </h1>
              <Link to="/login" exact className="btn btn--white btn--animated">Discover Friendship</Link>
            </div>
            </header>
        </div>
    )
  }
}

export default Home
