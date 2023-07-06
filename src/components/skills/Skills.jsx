import React from 'react'
import './skills.css'
import ScrollAnimation from 'react-animate-on-scroll'

import Skillsect from './skillsect'
import Cardskill from './cardskill'
import ToolsLi from './tools'
import Leaf from '../leaf/leaf'

import {VscOrganization} from 'react-icons/vsc'
import {PiPenNibStraight} from 'react-icons/pi'
import {FaChalkboardTeacher, FaPenNib} from 'react-icons/fa'
import {SiAdobephotoshop, SiBlender} from 'react-icons/si'
import {CgFigma} from 'react-icons/cg'

const Skills = () => {
  return (
    <section className='skillbg' id='skills'>
      <div className='container skills__container'>
        <ScrollAnimation animateIn='animate__fadeIn'>
        <h1 className='text__title'>"Experience is the best teacher."</h1>
        <p className='text__paragraph'>people learn more and gain more wisdom from actual observation and contact with events or facts rather than hearing about these events or facts secondhand.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn='animate__fadeIn'>
        <div className='skills__container2'>
          <Cardskill 
          icon={VscOrganization}
          titlec="Organization"
          smallc="Head Division Komp-Info of Electrical Science Club 2023."/>
          <Cardskill 
          icon={PiPenNibStraight}
          titlec="Vector Designer"
          smallc="Freelance vector designer since 2020."/>
          <Cardskill 
          icon={FaChalkboardTeacher}
          titlec="Lecturer Assistant"
          smallc="Lecturer asistant in in the course of numerical methods practice."/>
        </div>
        </ScrollAnimation>
      </div>
      
      <ScrollAnimation animateIn='animate__fadeIn'>
        <Skillsect />
      </ScrollAnimation>
      <Leaf />

      <ScrollAnimation animateIn='animate__fadeIn'>
      <div className='container tools__container'>
        <div className='left__tools'>
          <h1 className='tools_title'><b><span>What</span> i use?</b></h1>
          <p>Some editing tools that i usually use</p>
        </div>
        <div className='tools'>
          <ToolsLi 
          itools={SiAdobephotoshop}
          ttools="Adobe Photoshop"
          tdesc="Using Adobe Photoshop for 2 years."/>
          <ToolsLi 
          itools={SiBlender}
          ttools="Blender"
          tdesc="Using Blender for 3D design."/>
          <ToolsLi 
          itools={FaPenNib}
          ttools="Infinite Design"
          tdesc="Using Infinite Design for Vector."/>
          <ToolsLi 
          itools={CgFigma}
          ttools="Figma"
          tdesc="Using Figma to design UI"/>
        </div>
      </div>
      </ScrollAnimation>
    </section>
  )
}

export default Skills