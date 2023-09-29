import React from "react";
import "./experience.css";
import { BsPatchCheck } from "react-icons/bs";

function Experience() {
  return (
    <section id="experience">
      <h5>My Skills</h5>
      <h2>My Dynamic Skill Set</h2>
      <div className="container experience_container">
      <div className="experience_frontend">
          <h3>Digital Marketing</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheck className="experience_details-icon" />
              <div>
                <h4>SEO's</h4>
                <small className="text-light">Good</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheck className="experience_details-icon" />
              <div>
                <h4>Social Media Management</h4>
                <small className="text-light"> Very Good</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheck className="experience_details-icon" />
              <div>
                <h4>Content Marketing</h4>
                <small className="text-light">Good</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheck className="experience_details-icon" />
              <div>
                <h4>Email Marketing</h4>
                <small className="text-light">Fairly good</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheck className="experience_details-icon" />
              <div>
                <h4>Paid Advertising(meta ad Platform)</h4>
                <small className="text-light">Good</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheck className="experience_details-icon" />
              <div>
                <h4>Analytics and  Data Interpretation</h4>
                <small className="text-light">Very good</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheck className="experience_details-icon" />
              <div>
                <h4>Conversion rate optimization and A/B Testing</h4>
                <small className="text-light">good</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_frontend">
          <h3>Fronted Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheck className="experience_details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Good</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheck className="experience_details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Good</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheck className="experience_details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Good</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheck className="experience_details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Good</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheck className="experience_details-icon" />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Good</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheck className="experience_details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Good</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF Fronted */}
        <div className="experience_backend">
          <h3>BackEnd Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheck className="experience_details-icon" />
              <div>
                <h4>Ruby</h4>
                <small className="text-light">Good</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheck className="experience_details-icon" />
              <div>
                <h4>Ruby on Rails</h4>
                <small className="text-light">Good</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheck className="experience_details-icon" />
              <div>
                <h4>Django</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheck className="experience_details-icon" />
              <div>
                <h4>Postgresql</h4>
                <small className="text-light">Good</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheck className="experience_details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheck className="experience_details-icon" />
              <div>
                <h4>PHP</h4>
                <small className="text-light">OnGoing</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
