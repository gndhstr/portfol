import React from 'react'
import { useRef } from 'react'
import emailjs from 'emailjs-com'
import ScrollAnimation from 'react-animate-on-scroll'

import './contacts.css'

import Gitli from './gitli'

import {BiMap} from 'react-icons/bi'
import {HiOutlineMail} from 'react-icons/hi'
import {LiaPhoneSolid} from'react-icons/lia'

const Contacts = () => {

  const form = useRef ();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qnp5np4', 'template_eeyylre', form.current, '0nW27KfPh4Ykubhvy')

    e.target.reset()
  };
  

  return (
    <section id='contacts'>
      <ScrollAnimation animateIn='animate__fadeIn'>
      <div className='container contact__container'>
        <div className='git__cards'>
          <h2>Get in Touch</h2>
          <Gitli 
          iconli = {BiMap}
          titleli = "Address"
          textli = "Kab. Semarang, Jawa Tengah"/>
          <Gitli 
          iconli = {HiOutlineMail}
          titleli = "Email"
          textli = "ghandisatria@gmail.com"/>
          <Gitli 
          iconli = {LiaPhoneSolid}
          titleli = "Phone"
          textli = "+62 8564-7422-491"/>
        </div>
        <div className='form__section'>
          <h2>Talk With Me</h2>
          <form className='form' ref={form} onSubmit={sendEmail}>
            <input name='name' type="text" placeholder='Your Full Name' required/>
            <input name='email' type="text" placeholder='Your Email' required/>
            <textarea name="message" placeholder='Type a message here...' rows="7" required></textarea>
            <button type='submit' className='btn btn-primary btn__submit'>Send Message</button>
          </form>
        </div>
      </div>
      </ScrollAnimation>
    </section>
  )
}

export default Contacts