import React from 'react'
import './about.css'
import ME from '../../assets/image5.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { RiFolder4Line } from 'react-icons/ri'

function About() {
  return (
    <section id="about">
      <h5>Get to know Me</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>4 Clients</small>
            </article>

            <article className="about_card">
              <RiFolder4Line className="about_icon" />
              <h5>Projects</h5>
              <small>10+ projects completed</small>
            </article>

            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>6 months</small>
            </article>
          </div>
          <p>
          I am a dynamic professional deeply passionate about the world of digital marketing, armed with a solid educational foundation in Applied Mathematics & Physics and fortified by specialized training in full-stack software development. My journey has been an intentional exploration of skills essential for excelling in the digital marketing landscape.
          </p>

          <a href='#contact' className='btn btn-primary'> Let's Talk</a>
        </div>
      </div>
    </section>
  );
}
export default About;