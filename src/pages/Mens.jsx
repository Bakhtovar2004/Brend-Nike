import React, { useState } from 'react';
import { FcLike } from 'react-icons/fc';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import { addToCart } from '../store/reducer/Cart';
import { addToFavourite } from '../store/reducer/Favourite';

export default function Mens() {
  const dispatch = useDispatch();

  const [nikes] = useState([
    {
      id: 1,
      src: "./Pulse.webp",
      just: "Top Seller",
      brend: "Nike Air Max Pulse",
      forMen: "Men`s shoes",
      color: "1 color",
      price: 150,
    },
    {
      id: 2,
      src: "./29.webp",
      just: "Top Seller",
      brend: "Nike Air Max 270",
      forMen: "Men`s shoes",
      color: "8 color",
      price: 160,
    },
    {
      id: 3,
      src: "./Seller.webp",
      just: "Top Seller",
      brend: "Nike Air Max Seller",
      forMen: "Men`s shoes",
      color: "2 color",
      price: 164,
    },
    {
      id: 4,
      src: "./se1.webp",
      just: "Top Seller",
      brend: "Nike Air Max SE",
      forMen: "Men`s shoes",
      color: "5 color",
      price: 125.8,
    },
    {
      id: 5,
      src: "./kids3.webp",
      just: "Top Seller",
      brend: "Nike Air Max 093",
      forMen: "Kids shoes",
      color: "2 color",
      price: 110,
    },
  ]);

  const [sortedShoes, setSortedShoes] = useState(nikes);
  const [sortingOption, setSortingOption] = useState('');

  const handleSortAscending = () => {
    const sorted = [...nikes].sort((a, b) => a.price - b.price);
    setSortedShoes(sorted);
    setSortingOption('asc');
  };

  const handleSortDescending = () => {
    const sorted = [...nikes].sort((a, b) => b.price - a.price);
    setSortedShoes(sorted);
    setSortingOption('desc');
  };

  return (
    <div>
      <Header />
      <div style={{ paddingLeft: 20, paddingTop: 20 }}>
        <h1>Top Seller</h1>
        <div className='btns'>
          <button onClick={handleSortAscending}>Sort by Price (Low to High)</button>
          <button onClick={handleSortDescending}>Sort by Price (High to Low)</button>
        </div>
      </div>
      <div className='products'>
        {sortedShoes.map((nike) => (
          <div>
            <div className='card' >
              <Link to={`/product/${nike.id}`} key={nike.id}>
                <img src={nike.src} alt='' />
              </Link>
              <div className='cardName'>
                <div>
                  <p className='brown'>{nike.just}</p>
                  <p>{nike.brend}</p>
                  <p>{nike.forMen}</p>
                  <p>{nike.color}</p>
                  <p>{nike.price} $</p>
                </div>
                <div className='cardButton'>
                  <div>
                    <div className='trash'>
                      <button
                        onClick={() => dispatch(addToFavourite(nike))}
                        className='icon'
                      >
                        <FcLike className='icons' />
                      </button>
                      <button
                        onClick={() => dispatch(addToCart(nike))}
                        className='iconTrash'
                      >
                        В корзину
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
