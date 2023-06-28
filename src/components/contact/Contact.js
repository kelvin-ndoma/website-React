import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsInstagram} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'



 function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ff8ja76', 'template_iqxnpzj', form.current, 'user_JE7Zl-S_Bmlp4GGht')
    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Instagram</h4>
            <h5>kelvinndomamutua@gmail</h5>
            <a href="mailto:kelvinndomamutua@gmail.com" target="_blank">Send Me a message </a>
          </article>

          <article className='contact_option'>
            <BsInstagram className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>k.e.l_v.i.n.s</h5>
            <a href="https://www.instagram.com/accounts/login/" target="_blank">Send Me a message </a>
          </article>

          <article className='contact_option'>
            <BsWhatsapp className='contact_option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+254708840557</h5>
            <a href="https://api.whatsapp.com/send?phone+254708840557" target="_blank">Send Me a message </a>
          </article>

        </div>
        {/* End Of Contact Options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder="Your Full Name" required/>
          <input type="email" name='email' placeholder="Your Email" required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
          
        </form>
      </div>
    
    </section>
  )
}
export default Contact;