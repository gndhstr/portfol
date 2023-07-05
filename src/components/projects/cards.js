import React from 'react'
import './projects.css'

function Cards (props) {
    console.log('Parameter : ', props)
  return (
    <div >
        <a>
        <img className='img__cards' src= {props.c_img} alt="Vector" />
        </a>
        <div className='card__desc'>
        <div className='text__desc'>
            <h4><b>{props.title}</b></h4>
            <small>{props.c_desc}</small>
        </div>
        </div>
    </div>
  )
}

export default Cards