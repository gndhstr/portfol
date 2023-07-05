import React from 'react'

function Tools (param) {
  return (
    <div className='list__tools'>
        <div className='icon__tools'>
            <param.itools/>
        </div>
        <div className='text__tools'>
            <h4 className='title__tools'><b>{param.ttools}</b></h4>
            <small>{param.tdesc}</small>
        </div>
    </div>
  )
}

export default Tools