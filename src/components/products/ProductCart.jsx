import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Header from '../header/Header';
import { HiHome } from 'react-icons/hi'

export default function ProductCart() {

  const { id } = useParams()
  const products = useSelector((state) => state.productAbout.items);

  const filterProducts = products.filter(product => product.id == id)

  return (
    <div style={{}}>
      <Header />
      <Link to='/'>
        <div className='goTo'>
          <button><HiHome /></button>
          <button className='goTo' >home</button>
        </div>
      </Link>
      {filterProducts.map((product) =>
      (<div style={{ display: 'flex', gap: 20 }} key={product.id}>
        <img style={{ width: 500, padding: 10 }} src={product.src} alt="logo" />
        <div className='aboutBrend'>
          <h2>{product.brend}</h2>
          <p>{product.just}</p>
          <p>{product.color}</p>
          <h2>{product.price}$</h2>
          <p className='aboutProduct'>{product.about}</p>

        </div>
      </div>))}
    </div>
  )
}
