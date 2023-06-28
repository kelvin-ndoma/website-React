import React from "react";
import "./portfolio.css";


import IMG3 from "../../assets/image1.png";
import IMG4 from "../../assets/image1.png";
import IMG5 from "../../assets/image1.png";
import IMG6 from "../../assets/image1.png";

const data = [
  {
    id: 1,
    image: "https://img.freepik.com/free-vector/banking-industry-concept-illustration_114360-13934.jpg?size=626&ext=jpg&ga=GA1.1.1191098058.1684769255&semt=sph",
    title: "PowerleKt suppliers",
    github: "https://github.com/kelvin-ndoma/PowerLektsuppliers",
    demo: "https://power-lektsuppliers.vercel.app/",
  },
  {
    id: 2,
    image: "https://img.freepik.com/free-vector/banking-industry-concept-illustration_114360-13934.jpg?size=626&ext=jpg&ga=GA1.1.1191098058.1684769255&semt=sph",
    title: "Flatironbank spending",
    github: "http://github.com",
    demo: "https://flatironbank.vercel.app/",
  },
  {
    id: 3,
    image: "https://img.freepik.com/free-photo/metal-texture-with-lines_1048-4881.jpg?size=626&ext=jpg&uid=R96418730&ga=GA1.2.1191098058.1684769255&semt=ais",
    title: "Aluminium Fabricators",
    github: "https://github.com/kelvin-ndoma/henryfabricator",
    demo: "https://henryfabricator.vercel.app/",
  },
  {
    id: 4,
    image: "https://img.freepik.com/free-vector/calculator-concept-illustration_114360-1194.jpg?size=626&ext=jpg&ga=GA1.1.1191098058.1684769255&semt=sph",
    title: "Simple Age Calculator",
    github: "http://github.com",
    demo: "https://kelvin-ndoma.github.io/age-calculator/",
  },

  {
    id: 5,
    image: "https://img.freepik.com/free-vector/adopt-me-poster-with-cute-dog-cardboard-box-city-street-concept-adoption-homeless-animals-vector-banner-with-cartoon-illustration-funny-puppy-sitting-carton-box_107791-8061.jpg?size=626&ext=jpg&ga=GA1.1.1191098058.1684769255&semt=ais",
    title: "Animal-Donations",
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
