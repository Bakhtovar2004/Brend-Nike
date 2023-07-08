import React from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import './style/Contact.css'

export default function Contact() {
  return (
    <div>
      <Header/>

      <div>
<h1 className='pageContact'>CONTACT US</h1>
<hr />
<div className='phone'>
<div className='phoneList'>
  <img src="./phone.png" alt="" />
  <h3>PRODUCTS & ORDERS</h3>
  <h3>1-800-806-6453</h3>
  <h3>4 am - 11 pm PT</h3>
  <h3>7 days a week</h3>
</div>
<div className='phoneList'>
  <img src="./phone.png" alt="" />
  <h3>NRC, NTC & .SWOOSH</h3>
  <h3>1-800-806-6453</h3>
  <h3>8 am - 5 pm PT</h3>
  <h3>Mon - Fri</h3>
</div>
<div className='phoneList'>
  <img src="./phone.png" alt="" />
  <h3>COMPANY INFO & INQUIRIES</h3>
  <h3>1-800-806-6453</h3>
  <h3>7 am - 4 pm PT</h3>
  <h3>Mon - Fri</h3>
</div>
<div className='phoneList'>
  <img src="./chat.png" alt="" />
  <h3>PRODUCTS & ORDERS</h3>
  <h3>Chat with us</h3>
  <h3>4 am - 11 pm PT</h3>
  <h3>7 days a week</h3>
</div>
<div className='phoneList'>
  <img src="./store.png" alt="" />
  <h3>STORE LOCATOR</h3>
  <h3>Find Nike retail stores near you</h3>
</div>
</div>

    </div>

      <Footer/>
    </div>
  )
}
