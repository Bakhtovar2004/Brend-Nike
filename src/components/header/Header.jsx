import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { BsCart4 } from 'react-icons/bs'
import { FcLike } from 'react-icons/fc'
import { useSelector } from 'react-redux'

export default function Header({ onSearch }) {

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const products = useSelector(state => state.cart.items)
  const productsFavourite = useSelector(state => state.favourite.items)

  return (
    <div className='header'>
      <Link to='/'>
        <div className="logo">
          <img src="https://logowik.com/content/uploads/images/697_nike.jpg" alt="" />
        </div></Link>
      <div className="menu">
        <Link to='/'><p className='a'>Home</p></Link>
        <Link to='/new'> <p className='a'>New</p></Link>
        <Link to='/men'> <p className='a'>Men</p></Link>
        <Link to='/kids'> <p className='a'>Kids</p></Link>
        <Link to='/sale'> <p className='a'>Sale</p></Link>
        <Link to='/contact'> <p className='a'>Contact</p></Link>
        <Link to='/about'> <p className='a'>About</p></Link>
        <Link to='/help'> <p className='a'>Help</p></Link>
      </div>
      <div>
        <form onSubmit={handleSearch}>
          <input
            className='search'
            type='text'
            placeholder="Search here!"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <input className='submit' type="submit" value="Search" />
        </form>
      </div>
      <div className="main">
        <div className="favorites">

          <Link to='/favourite'>
            <div className='favoritesCart'>
              <button className='icon ' title='Изобранные'><FcLike className='icons' /></button>
              <p>{productsFavourite.length}</p>
            </div>
          </Link>

          <Link to='/basket' >
            <div className='favoritesCart'>
              <button className='icon' title='Список заказов'><BsCart4 className='icons' /></button>
              <p>{products.length}</p>
            </div>
          </Link>
        </div>
        <Link to='/login'>
          <div className="sing-up">
            <p className='a'>Sing up</p>
          </div>
        </Link>
      </div>

    </div>
  )
}
