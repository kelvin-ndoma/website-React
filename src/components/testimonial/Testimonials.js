import React from 'react'
import './testimonials.css'
import AVT1 from '../../assets/image2.jpg'
import AVT2 from '../../assets/image2.jpg'
import AVT3 from '../../assets/image2.jpg'
import AVT4 from '../../assets/image2.jpg'
//for the swipe of testimonials i used swiper.js, first install it

// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';


const data = [
  {
    avatar: AVT1,
    name:"Oscar Wilde ",
    review: '“Experience is the name everyone gives to their mistakes. '
   
  },
  {
    avatar: AVT2,
    name:"Antoine de Saint",
    review: "Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away."

  },
  {
    avatar: AVT3,
    name:"Cory House",
    review: "Code is like humor. When you have to explain it, it’s bad."

  },
  {
    
    avatar: AVT4,
    name:"Martin Fowler",
    review: "When to use iterative development? You should use iterative development only on projects that you want to succeed",

  },
]




function Testimonials() {
  return (
    <section id='testimonials'>
      <h5>Some Quotes for you</h5>
      <h2>Testimonials</h2>
      <Swiper className='container testimonials_container'
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
      {
        data.map(({avatar, name, review, index})=>{
          return(
            <SwiperSlide key={index} className='testimonial'>
            <div className='client_avatar'>
              <img src={avatar} alt='Avatar one'/>
            </div>
            <h5 className='client_name'>{name}</h5>
             <small className='client_review'>
              {review}
            </small> 
          </SwiperSlide>
          )
        })
      }
      </Swiper>
    </section>
  )
}

export default Testimonials;