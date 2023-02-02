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
              <p>lorem jshjfdhdkjfhsdhfkf</p>
            </li>
            <li>
              <AiOutlineCheck className="service_list-icon" />
              <p>lorem jshjfdhdkjfhsdhfkf</p>
            </li>
            <li>
              <AiOutlineCheck className="service_list-icon" />
              <p>lorem jshjfdhdkjfhsdhfkf</p>
            </li>
            <li>
              <AiOutlineCheck className="service_list-icon" />
              <p>lorem jshjfdhdkjfhsdhfkf</p>
            </li>
            <li>
              <AiOutlineCheck className="service_list-icon" />
              <p>lorem jshjfdhdkjfhsdhfkf</p>
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
              <p>lorem jshjfdhdkjfhsdhfkf</p>
            </li>
            <li>
              <AiOutlineCheck className="service_list-icon" />
              <p>lorem jshjfdhdkjfhsdhfkf</p>
            </li>
            <li>
              <AiOutlineCheck className="service_list-icon" />
              <p>lorem jshjfdhdkjfhsdhfkf</p>
            </li>
            <li>
              <AiOutlineCheck className="service_list-icon" />
              <p>lorem jshjfdhdkjfhsdhfkf</p>
            </li>
            <li>
              <AiOutlineCheck className="service_list-icon" />
              <p>lorem jshjfdhdkjfhsdhfkf</p>
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
              <p>lorem jshjfdhdkjfhsdhfkf</p>
            </li>
            <li>
              <AiOutlineCheck className="service_list-icon" />
              <p>lorem jshjfdhdkjfhsdhfkf</p>
            </li>
            <li>
              <AiOutlineCheck className="service_list-icon" />
              <p>lorem jshjfdhdkjfhsdhfkf</p>
            </li>
            <li>
              <AiOutlineCheck className="service_list-icon" />
              <p>lorem jshjfdhdkjfhsdhfkf</p>
            </li>
            <li>
              <AiOutlineCheck className="service_list-icon" />
              <p>lorem jshjfdhdkjfhsdhfkf</p>
            </li>
          </ul>
        </article>
        {/* end of content creation */}
      </div>
    </section>
  );
}

export default Services