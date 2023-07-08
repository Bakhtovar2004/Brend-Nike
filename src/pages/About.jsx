import React from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'

export default function About() {
  return (
    <div>
      <Header />
      <div>
        <h1 style={{ paddingLeft: 20, paddingTop: 20 }}>About US</h1>
        <hr />
        <div style={{ display: 'flex', flexDirection: 'column', width: 800, gap: 50, marginLeft:'33%' }}>
          <h3 style={{marginTop:20}}>This is a student’s project about an online campaign for Nike Inc.</h3>
          <img style={{ width: 400 ,marginLeft:100 }} src="https://logowik.com/content/uploads/images/697_nike.jpg" alt="" />
          <h4>Nike, Inc. is an American multinational association that is involved in the design, development, manufacturing and worldwide marketing and sales of apparel, footwear, accessories, equipment and services.</h4>
          <h4>The company’s world headquarters are situated near Beaverton, Oregon, in the Portland metropolitan area (USA). It is a major producer of sports equipment and one of the world’s largest suppliers of athletic shoes and apparel.</h4>
          <h4>It employs more than 44,000 people worldwide and in 2014 the brand alone was valued as $19 billion (€17,5 billion), making it the most valuable brand between sports businesses.Founded by Bill Bowerman and Phil Knight on January 25 1964, as Blue Ribbon Sports, the company became officially Nike, Inc. on May 30 1971. The company was named after the Greek goddess of victory, Nike (Νίκη).</h4>
          <h4>Apart from its own brand, Nike market its products under Nike Pro, Nike+, Nike Golf, Nike Blazers, Air Jordan, Air Max and other as well as subsidiaries including brands  Jordan, Hurley Int. and Converse.</h4>
          <h4>Nike sponsors many high-profile athletes and sports teams around the world, with the highly recognized trademarks of “Just Do It” and the Swoosh logo (which represents the wing of the Greek goddess Nike).</h4>
        </div>
      </div>
      <Footer />
    </div>
  )
}
