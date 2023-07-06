import React from 'react'
import './footer.css'

import {BiLogoFacebook,BiLogoInstagramAlt,BiLogoTwitter,BiLogoGithub,BiLogoLinkedin} from 'react-icons/bi'

const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#header" className='logo'>GNDHSTR</a>

      <ul className='permalinks'>
        <li><a href="#header">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Experience</a></li>
        <li><a href="#contacts">Contacts</a></li>
      </ul>

      <div className='social'>
        <a href="https://facebook.com/gndhstr" target="_blank" rel='noreferrer'><BiLogoFacebook className='social__logo'/></a>
        <a href="https://instagram.com/gndhstr" target="_blank" rel='noreferrer'><BiLogoInstagramAlt className='social__logo'/></a>
        <a href="https://twitter.com/gndhstr" target="_blank" rel='noreferrer'><BiLogoTwitter className='social__logo'/></a>
        <a href="https://github.com/gndhstr" target="_blank" rel='noreferrer'><BiLogoGithub className='social__logo'/></a>
        <a href="https://linkedin.com/in/gndhstr" target="_blank" rel='noreferrer'><BiLogoLinkedin className='social__logo'/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; GNDHSTR. All rights reserved.</small>
      </div>
    </footer>
  )
} 

export default Footer