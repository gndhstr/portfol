import React from 'react'
import './nav.css'
import {BiHome, BiUser,BiBook,BiPhoneCall} from 'react-icons/bi'
import {CgWorkAlt} from 'react-icons/cg'
import {Link} from 'react-scroll'

const Nav = () => {

  return (
    <nav className='navi'>
          <Link activeClass='active' spy to="header" ><BiHome/></Link>
          <Link activeClass='active' spy to="about" ><BiUser/></Link>
          <Link activeClass='active' spy to="projects"><CgWorkAlt/></Link>
          <Link activeClass='active' spy to="skills" ><BiBook/></Link>
          <Link activeClass='active' spy to="contacts" ><BiPhoneCall/></Link>
    </nav>
  )
  
}

export default Nav