import React from 'react'
import './projects.css'
import ryujin from '../../assets/vector-ryujin.png'
import soohee from '../../assets/vector-soohee.jpg'
import faith from '../../assets/3d-faith.jpg'
import twolost from '../../assets/3d-twolost.jpg'
import Cards from './cards'

const Projects = () => {
  return (
    <section id='projects'>
      <h2>Projects</h2>
      <div className='container projects__container'>
        <Cards 
        c_img={ryujin} 
        title='신류진'
        c_desc='Shin Ryu-jin supremacy.'/>
        <Cards
        c_img={soohee} 
        title="xeesoxee"
        c_desc="xeesoxee (Han So-hee) is one of my favorite actresses."/>
        <Cards
        c_img={faith} 
        title='/fāTH/'
        c_desc='Faith is an 3D designs. Faith, is confidence or trust in a person, thing, or concept.'/>
        <Cards
        c_img={twolost} 
        title='Two Lost Souls'
        c_desc="Two lost souls is the most favorite 3d design I've ever made. this design has deep meaning for myself."/>
      </div>
    </section>
  )
}

export default Projects