import React from 'react'
import './Footer.css'
import { FaWhatsapp } from 'react-icons/fa6'
import { AiOutlineInstagram } from 'react-icons/ai'
import { LiaTelegram } from 'react-icons/lia'
import { FiTwitter } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='footer'>
     <div className='about'>
     <div className='iconFooter'>
        <button><FaWhatsapp  className='iconLink'/></button>
        <button><AiOutlineInstagram className='iconLink' /></button>
        <button><LiaTelegram className='iconLink' /></button>
        <button><FiTwitter className='iconLink' /></button>
      </div>
      <div className='contact'>
      <Link to='/sale'><p>Sale</p></Link>
      <Link to='/contact'><p>Contacts</p></Link>
      <Link to='/about'><p>About</p></Link>
      <Link to='/help'><p>Help</p></Link>
      </div>
     </div>
      <div className="usa"><b>United States </b> <p>@ 2023 Nike,Inc All Rights Reserved</p></div>
    </div>
  )
}
