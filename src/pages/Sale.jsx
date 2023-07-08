import React, { useState } from 'react';
import { FcLike } from 'react-icons/fc';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import { addToCart } from '../store/reducer/Cart';
import { addToFavourite } from '../store/reducer/Favourite';

export default function Sale() {
  const dispatch = useDispatch();

  const [nikes] = useState([
    {
      id: 1,
      src: "./Plus.webp",
      just: "Sale",
      brend: "Nike Air Max SC",
      forMen: "Men`s shoes",
      color: "9 color",
      price: 83.5,
    },
    {
      id: 2,
      src: "./Penny.webp",
      just: "Sale",
      brend: "Nike Air Max Penny",
      forMen: "Men`s shoes",
      color: "7 color",
      price: 135,
    },
    {
      id: 3,
      src: "./2090.webp",
      just: "Sale",
      brend: "Nike Air Max 2090",
      forMen: "Men`s shoes",
      color: "3 color",
      price: 110,
    },
    {
      id: 4,
      src: "./kids4.webp",
      just: "Sale",
      brend: "Nike Air Max 153",
      forMen: "Kids shoes",
      color: "6 color",
      price: 110,
    },
    {
      id: 5,
      src: "./kids7.webp",
      just: "Sale",
      brend: "Nike Air Max 50",
      forMen: "Kids shoes",
      color: "5 color",
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
        <h1>On Sale</h1>
        <div className='btns'>
          <button onClick={handleSortAscending}>Sort by Price (Low to High)</button>
          <button onClick={handleSortDescending}>Sort by Price (High to Low)</button>
        </div>
      </div>
      <div className='products'>
        {sortedShoes.map((nike)  => (
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
