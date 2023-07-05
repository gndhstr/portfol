import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithubSquare} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'

const Social = () => {
  return (
    <div className='header__social'>
        <a href="http://linkedin.com/in/gndhstr" target="_blank"><FaLinkedin/></a>
        <a href="http://github.com/gndhstr" target="_blank"><FaGithubSquare/></a>
        <a href="https://instagram.com/gndhstr" target="_blank"><FaInstagramSquare/></a>
    </div>
  )
}

export default Social