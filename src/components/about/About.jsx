import React from 'react'
import './about.css'
import profile from '../../assets/profile2.jpg'
import Desc from './description'
import ScrollAnimation from 'react-animate-on-scroll'

const About = () => {
  return (
    <section id='about'>
      <ScrollAnimation animateIn='animate__fadeInUp'>
        <h2 className='h2__about'><span>About</span> Me</h2>
      </ScrollAnimation>
      <div className='container about__container'>
        <ScrollAnimation animateIn='animate__fadeInUp'>
        <div className='about__img'>
          <img src={profile} alt="photos" />
        </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn='animate__fadeInUp'>
        <div className='about__contents'>
          <div className='about__desc'>
            <h3>Gandhi<span> Satria Mukti</span></h3>
            <h4 className='h4__about'>Student</h4>
            <Desc />
          </div>

          {/* <a className='btn btn-primary' href="#contacts">Let's Talk</a> */}
        </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

export default About