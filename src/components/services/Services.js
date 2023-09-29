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
    <h3>Digital Marketing Services</h3>
  </div>
  <p> Here's what I offer:</p>
  <ul className="service_list">
    <li>
      <AiOutlineCheck className="service_list-icon" />
      <p>Search Engine Optimization (SEO): Elevate your online content to rank higher in search engine results, ensuring your brand stands out and attracts organic traffic.</p>
    </li>
    <li>
      <AiOutlineCheck className="service_list-icon" />
      <p>Social Media Marketing: Harness the power of social platforms to build your brand, engage with your audience, and drive traffic to your website.</p>
    </li>
    <li>
      <AiOutlineCheck className="service_list-icon" />
      <p>Email Marketing: Craft targeted and personalized email campaigns to nurture leads, promote products, and keep your audience informed and engaged.</p>
    </li>
    <li>
      <AiOutlineCheck className="service_list-icon" />
      <p>Content Marketing: Develop and distribute valuable, relevant content to attract and retain your ideal audience, ultimately driving profitable customer action.</p>
    </li>
    <li>
      <AiOutlineCheck className="service_list-icon" />
      <p>Beautiful Landing Pages: Design visually stunning and conversion-focused landing pages to capture leads and guide potential clients seamlessly through the sales funnel.</p>
    </li>
    <li>
      <AiOutlineCheck className="service_list-icon" />
      <p>Cross-Channel Integration: Ensure a seamless and cohesive digital marketing strategy by integrating various channels, maximizing your reach and impact.</p>
    </li>
    <li>
      <AiOutlineCheck className="service_list-icon" />
      <p>Analytics and Reporting: Utilize data-driven insights to measure the success of your digital marketing efforts, understand user behavior, and make informed decisions for continuous improvement.</p>
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
    <h3>Elevate Your Brand with Comprehensive Content Services</h3>
  </div>
  <ul className="service_list">
    <li>
      <AiOutlineCheck className="service_list-icon" />
      <p>Strategic Content Writing: Craft engaging and informative written content tailored for websites, blogs, articles, and social media posts, aligning seamlessly with your brand's voice and values.</p>
    </li>
    <li>
      <AiOutlineCheck className="service_list-icon" />
      <p>Persuasive Copywriting: Develop compelling and irresistible copy for advertisements, sales pages, landing pages, and marketing materials that not only grab attention but drive conversions.</p>
    </li>
    <li>
      <AiOutlineCheck className="service_list-icon" />
      <p>Precise Editing and Proofreading: Ensure the highest quality in your content through meticulous review, editing for accuracy, coherence, and adherence to style guidelines. Additionally, provide thorough proofreading for grammar, spelling, and punctuation errors.</p>
    </li>
    <li>
      <AiOutlineCheck className="service_list-icon" />
      <p>SEO-Optimized Content: Implement strategies to enhance your online visibility with content optimized for search engines, ensuring your brand reaches a wider audience.</p>
    </li>
    <li>
      <AiOutlineCheck className="service_list-icon" />
      <p>Content Strategy Development: Create a comprehensive content strategy tailored to your brand's goals, ensuring consistency, relevance, and effectiveness across all channels.</p>
    </li>
    <li>
      <AiOutlineCheck className="service_list-icon" />
      <p>Visual Content Creation: Enhance your brand's visual appeal with the creation of graphics, infographics, and other visual elements that complement and strengthen your written content.</p>
    </li>
  </ul>
  
</article>

        {/* end of content creation */}
      </div>
    </section>
  );
}

export default Services