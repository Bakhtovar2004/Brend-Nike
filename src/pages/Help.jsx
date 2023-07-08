import React from 'react'
import { AiFillDislike, AiFillLike } from 'react-icons/ai'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import './style/Help.css'

export default function Help() {
  return (
    <div>
      <Header />
      <div className='allDiv'>
        <div className='getHelp'>
          <h1 className='bigText'>GET HELP</h1>
          <input className='searchInput' type="search" placeholder='What can we help ' />
        </div>
        <h2 className='bigText'>
          WHERE IS MY REFUND?
        </h2>
        <div className='smallText'>
          <p>After your return is processed, we’ll email you when the refund is issued to your payment method. Refunds may take up to 10 additional days to be available in your account, depending on your bank’s policies.</p>
          <p>Nike gift cards and product vouchers: Funds are typically available within 24 hours of the refund being issued. You can check your balance online at any time.</p>
          <p>Klarna: If you paid through Klarna, they will also issue your refund. Please contact Klarna directly with refund questions.</p>
          <p>FAQs</p>
          <p>How do I check the status of my return?</p>
          <p>You can check your return status at nike.com/orders. Nike Members can sign in to access their orders page. Guests need to use their order number and email address to access their orders page.</p>
          <p>How do I check the status of my claim?</p>
          <p>Please visit nikeclaims.com to check the status of your claim.</p>
        </div>
        <div className='smallText'>
          <h3 className='textHelp'>Help Us Improve</h3>
          <h3>Was this page helpful?</h3>
        </div>
        <div className='buttonHelp'>
          <div>
            <button className='buttonLike'><AiFillLike /></button>
            <p>Yes</p>
          </div>
          <div>
            <button className='buttonLike'><AiFillDislike /></button>
            <p>No</p>
          </div>
        </div>
        <h2 className='bigText'>RELATED</h2>
        <div>
          <ul className='smallText'>
            <li>WHAT IS NIKE’S RETURN POLICY?</li>
            <li>HOW DO I RETURN MY NIKE ORDER?</li>
            <li>HOW DO I CHECK MY NIKE GIFT CARD BALANCE?</li>
            <li>WHAT IS NIKE MEMBERSHIP?</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  )
}
