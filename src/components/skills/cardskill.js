import React from 'react'
import './skills.css'

function Cardskill(param) {
  return (
    <div className='skills__card'>
      <param.icon className='icon'/>
      <h4><b>{param.titlec}</b></h4>
      <small>{param.smallc}</small>
    </div>
  )
}

export default Cardskill