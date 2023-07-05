import React from 'react'

function Gitli (param) {
  return (
    <div className='contact__list'>
    <div className='contact__flex'>
      <param.iconli className='icon__list'/>
      <h4>{param.titleli}</h4>
    </div>
    <h5 className='text__list'>{param.textli}</h5>
  </div>
  )
}

export default Gitli