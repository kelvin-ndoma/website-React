import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

function HeaderSocial() {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/kelvin-ndoma-637102259/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com" target="_blank"><FaGithub/></a>
        <a href="https://dribble.com" target="_blank"><FiDribbble/></a>
    </div>
  )
}

export default HeaderSocial