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
              <small>2 For now</small>
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
            As a recent graduate with a degree in Mathematics and Physics and a certificate in Software Engineering, I am well-equipped to take on the challenges of Full-Stack Software Development. My background in mathematics and physics has provided me with a strong foundation in logic, problem-solving, and analytical skills, which I can apply to the software development process.

            During my studies, I gained hands-on experience working with various programming languages, including Ruby on Rails, JavaScript, CSS, Html, and React. I have a solid understanding of software development principles and am always eager to learn new technologies and tools. My passion for technology and software development drives me to stay up-to-date with the latest trends and advancements in the industry.

            While I may not have prior work experience, I have completed several projects as part of my coursework, demonstrating my ability to work effectively in a team-based environment and develop innovative software solutions. I possess strong problem-solving and critical-thinking skills, which I can apply to real-world projects and deliver efficient and effective solutions.

            I am excited to begin my career as a Full-Stack Software Developer, and I am confident that my skills, motivation, and passion for technology will enable me to make significant contributions to any software development team.
          </p>

          <a href='#contact' className='btn btn-primary'> Let's Talk</a>
        </div>
      </div>
    </section>
  );
}
export default About;