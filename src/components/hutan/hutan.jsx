import React from 'react'
import './hutan.css'

import Hill1 from'../../assets/hill1.png'
import Hill2 from'../../assets/hill2.png'
import Hill3 from'../../assets/hill3.png'
import Hill4 from'../../assets/hill4.png'


const hutan = () => {
  return (
    <div id='skills' className='hutan'>
        <img src={Hill4}/>
        <img src={Hill3}/>
        <img src={Hill2}/>
        <img src={Hill1}/>
        <h1 id='text'>EXPERIENCE</h1>
    </div>
  )
}

export default hutan