import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/image1.png";
import IMG2 from "../../assets/image1.png";
import IMG3 from "../../assets/image1.png";
import IMG4 from "../../assets/image1.png";
import IMG5 from "../../assets/image1.png";
import IMG6 from "../../assets/image1.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "man",
    github: "http://github.com",
    demo: "https://animal-donation.vercel.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "money",
    github: "http://github.com",
    demo: "https://animal-donation.vercel.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "monday",
    github: "http://github.com",
    demo: "https://animal-donation.vercel.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "monkey",
    github: "http://github.com",
    demo: "https://animal-donation.vercel.app/",
  },
  {
    id: 5,
    image: IMG5,
    title: "mans",
    github: "http://github.com",
    demo: "https://animal-donation.vercel.app/",
  },
  {
    id: 6,
    image: IMG6,
    title: "mandzee",
    github: "http://github.com",
    demo: "https://animal-donation.vercel.app/",
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
       {
        data.map(({id, image, title, github, demo})=>{
          return(
          <article key={id} className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio_item-cta">
            <a href={github} className="btn" target="_blank">
              Github
            </a>
            <a
              href={demo}
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
          )
        })
       }
      </div>
    </section>
  );
}

export default Portfolio;
