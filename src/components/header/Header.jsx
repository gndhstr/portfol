import React from 'react'
import "./header.css"
import Btn from './btn'
import Profile from '../../assets/profile.png'
import Social from './social'
import Greetings from './greetings'

const Header = () => {
  return (
    <header id= 'header' className='header'>
      <div className='container header__container'>
        <Greetings />
        <h1>I'm Gandhi</h1>
        <Btn/>
        <Social/>

        <div className='profile'>
          <img src={Profile} alt="Profile Pics" />
        </div>

        <a href="#contacts" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
    
  )
}

export default Header