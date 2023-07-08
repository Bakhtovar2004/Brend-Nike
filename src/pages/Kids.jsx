import React, { useState } from 'react';
import { FcLike } from 'react-icons/fc';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import { addToCart } from '../store/reducer/Cart';
import { addToFavourite } from '../store/reducer/Favourite';

export default function Kids() {
  const dispatch = useDispatch();

  const [nikes] = useState([
    {
      id: 1,
      src: "./kids8.webp",
      just: "Kids",
      brend: "Nike Air Max 48",
      forMen: "Kids shoes",
      color: "3 color",
      price: 110,
    },
    {
      id: 2,
      src: "./kids6.webp",
      just: "Kids",
      brend: "Nike Air Max 278",
      forMen: "Kids shoes",
      color: "8 color",
      price: 110,
    },
    {
      id: 3,
      src: "./kids1.webp",
      just: "Kids",
      brend: "Nike Air Max 2091",
      forMen: "Kids shoes",
      color: "2 color",
      price: 90,
    },
    {
      id: 4,
      src: "./kids2.webp",
      just: "Kids",
      brend: "Nike Air Max 2092",
      forMen: "Kids shoes",
      color: "7 color",
      price: 110,
    },
    {
      id: 5,
      src: "./max.webp",
      just: "Kids",
      brend: "Nike Air Max 91",
      forMen: "Men`s shoes",
      color: "3 color",
      price: 170,
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
        <h1>Kids Shoes</h1>
        <div className='btns'>
          <button onClick={handleSortAscending}>Sort by Price (Low to High)</button>
          <button onClick={handleSortDescending}>Sort by Price (High to Low)</button>
        </div>
      </div>
      <div className='products'>
        {sortedShoes.map((nike) => (
          <div>
            <div className='card'>
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
