import React from 'react'
import { Link } from 'react-router-dom'
import './Slider.css'
export default function Slider() {
  return (
    <div className='slider'>
      <img src="./slider.webp" alt="" />
      <div className="absolute">
        <h1>SAVE UP TO 50%</h1>
        <h3>Save big on limited-time markdowns-no code required.Exclusions apply</h3>
        <Link to='/sale'>
          <button className='sale'>Sale</button>
        </Link>
      </div>
    </div>
  )
}

