import React from 'react'
import './services.css'
import {AiOutlineCheck} from 'react-icons/ai'

function Services() {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
      <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service_list">
            <li>
              <AiOutlineCheck className="service_list-icon" />
              <p>Responsive Design: Creating interfaces that adapt and work well across different devices and screen sizes.</p>
            </li>
            <li>
              <AiOutlineCheck className="service_list-icon" />
              <p>User Research: Conducting research to understand user preferences, needs, and behaviors.</p>
            </li>
            <li>
              <AiOutlineCheck className="service_list-icon" />
              <p>Visual Design: Developing visually appealing and cohesive UI designs that align with the brand's identity.</p>
            </li>
            <li>
              <AiOutlineCheck className="service_list-icon" />
              <p>Interaction Design: Designing intuitive and engaging interactions for seamless user experiences.</p>
            </li>
            <li>
              <AiOutlineCheck className="service_list-icon" />
              <p>Collaborating with Developers: Working closely with development teams to ensure the design is implemented correctly and meets the intended user experience.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <AiOutlineCheck className="service_list-icon" />
              <p>Front-end Development: Building responsive and interactive user interfaces using modern web technologies.</p>
            </li>
            <li>
              <AiOutlineCheck className="service_list-icon" />
              <p>Back-end Development: Creating server-side logic and databases to support web applications.</p>
            </li>
            <li>
              <AiOutlineCheck className="service_list-icon" />
              <p>API Integration: Integrating third-party APIs to add functionality and enhance web applications.</p>
            </li>
            <li>
              <AiOutlineCheck className="service_list-icon" />
              <p>Content Management Systems (CMS): Developing CMS-based websites for easy content management.</p>
            </li>
            <li>
              <AiOutlineCheck className="service_list-icon" />
              <p>Website Maintenance: Providing ongoing support and updates for existing web applications.</p>
            </li>
          </ul>
        </article>
        {/* end of web developement */}
        <article className="service">
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service_list">
          <li>
              <AiOutlineCheck className="service_list-icon" />
              <p>Content Writing: Creating engaging and informative written content for websites, blogs, articles, social media posts, or marketing materials.</p>
            </li>
            <li>
              <AiOutlineCheck className="service_list-icon" />
              <p>Copywriting: Crafting persuasive and compelling copy for advertisements, sales pages, landing pages, and other marketing materials.</p>
            </li>
            <li>
              <AiOutlineCheck className="service_list-icon" />
              <p>Content Editing and Proofreading: Reviewing and editing content to ensure accuracy, coherence, and adherence to style guidelines, as well as proofreading for grammar, spelling, and punctuation errors.</p>
            </li>
          </ul>
        </article>
        {/* end of content creation */}
      </div>
    </section>
  );
}

export default Services