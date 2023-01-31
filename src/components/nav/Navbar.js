import React from 'react'
import './navbar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookHeart} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageRounded} from 'react-icons/bi'

function Navbar() {
  return (
    <nav>
      <a href="#"><AiOutlineHome/></a>
      <a href="#about"><AiOutlineUser/></a>
      <a href="#experience"><BiBookHeart/></a>
      <a href="#services"><RiServiceLine/></a>
      <a href="#content"><BiMessageRounded/></a>
      
    </nav>
  )
}

export default Navbar