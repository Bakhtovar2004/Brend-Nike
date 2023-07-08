import React, { useState } from 'react';
import Product from './Product';
import './Products.css';

export default function Products({ searchQuery }) {
  const [nikes] = useState([
    {
      id: 1,
      src: "./Pulse.webp",
      just: "Top Seller",
      brend: "Nike Air Max Pulse",
      forMen: "Men`s shoes",
      color: "1 color",
      price: 150,
      quantity: 1
    },
    {
      id: 2,
      src: "./91.webp",
      just: "New",
      brend: "Nike Air Max 90",
      forMen: "Men`s shoes",
      color: "2 color",
      price: 172.54,
      quantity: 1
    },
    {
      id: 3,
      src: "./Plus.webp",
      just: "Sale",
      brend: "Nike Air Max SC",
      forMen: "Men`s shoes",
      color: "9 color",
      price: 83.5,
      quantity: 1
    },
    {
      id: 4,
      src: "./29.webp",
      just: "Top Seller",
      brend: "Nike Air Max 270",
      forMen: "Men`s shoes",
      color: "8 color",
      price: 160,
      quantity: 1
    },
    {
      id: 5,
      src: "./SYSTM.webp",
      just: "New",
      brend: "Nike Air Max SYSTM",
      forMen: "Men`s shoes",
      color: "4 color",
      price: 100,
      quantity: 1
    },
    {
      id: 6,
      src: "./Seller.webp",
      just: "Top Seller",
      brend: "Nike Air Max Seller",
      forMen: "Men`s shoes",
      color: "2 color",
      price: 164,
      quantity: 1
    },
    {
      id: 7,
      src: "./Penny.webp",
      just: "Sale",
      brend: "Nike Air Max Penny",
      forMen: "Men`s shoes",
      color: "7 color",
      price: 135,
      quantity: 1
    },
    {
      id: 8,
      src: "./gtx.webp",
      just: "New",
      brend: "Nike Air Max GTX",
      forMen: "Men`s shoes",
      color: "5 color",
      price: 186,
      quantity: 1
    },
    {
      id: 9,
      src: "./se.webp",
      just: "New",
      brend: "Nike Air Max SC",
      forMen: "Men`s shoes",
      color: "8 color",
      price: 98,
      quantity: 1
    },
    {
      id: 10,
      src: "./max.webp",
      just: "Kids",
      brend: "Nike Air Max 91",
      forMen: "Men`s shoes",
      color: "3 color",
      price: 170,
      quantity: 1
    },
    {
      id: 11,
      src: "./se1.webp",
      just: "Top Seller",
      brend: "Nike Air Max SE",
      forMen: "Men`s shoes",
      color: "5 color",
      price: 125.8,
      quantity: 1
    },

    {
      id: 12,
      src: "./2090.webp",
      just: "Sale",
      brend: "Nike Air Max 2090",
      forMen: "Men`s shoes",
      color: "3 color",
      price: 110,
      quantity: 1
    },
    {
      id: 13,
      src: "./kids1.webp",
      just: "Kids",
      brend: "Nike Air Max 2091",
      forMen: "Kids shoes",
      color: "2 color",
      price: 90,
      quantity: 1
    },
    {
      id: 14,
      src: "./kids2.webp",
      just: "Kids",
      brend: "Nike Air Max 2092",
      forMen: "Kids shoes",
      color: "7 color",
      price: 110,
      quantity: 1
    },
    {
      id: 15,
      src: "./kids3.webp",
      just: "Top Seller",
      brend: "Nike Air Max 093",
      forMen: "Kids shoes",
      color: "2 color",
      price: 110,
      quantity: 1
    },
    {
      id: 16,
      src: "./kids4.webp",
      just: "Sale",
      brend: "Nike Air Max 153",
      forMen: "Kids shoes",
      color: "6 color",
      price: 110,
      quantity: 1
    },
    {
      id: 17,
      src: "./kids5.webp",
      just: "New",
      brend: "Nike Air Max 209",
      forMen: "Kids shoes",
      color: "1 color",
      price: 110,
      quantity: 1
    },
    {
      id: 18,
      src: "./kids6.webp",
      just: "Kids",
      brend: "Nike Air Max 278",
      forMen: "Kids shoes",
      color: "8 color",
      price: 110,
      quantity: 1
    },
    {
      id: 19,
      src: "./kids7.webp",
      just: "Sale",
      brend: "Nike Air Max 50",
      forMen: "Kids shoes",
      color: "5 color",
      price: 110,
      quantity: 1
    },
    {
      id: 20,
      src: "./kids8.webp",
      just: "Kids",
      brend: "Nike Air Max 48",
      forMen: "Kids shoes",
      color: "3 color",
      price: 110,
      quantity: 1
    },

  ]);

  const [filter, setFilter] = useState('all');

  const filteredNikes = nikes.filter((nike) =>
    nike.brend.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleFilter = (type) => {
    setFilter(type);
  };

  const filteredProducts = filter === 'all' ? filteredNikes : filteredNikes.filter((nike) => nike.just.toLowerCase() === filter.toLowerCase());

  return (
    <div>
      <div className='btns'>
        <button onClick={() => handleFilter('new')}>New Shoes</button>
        <button onClick={() => handleFilter('top seller')}>Top Shoes</button>
        <button onClick={() => handleFilter('kids')}>Kids' Shoes</button>
        <button onClick={() => handleFilter('sale')}>On Sale</button>
        <button onClick={() => handleFilter('all')}>Show All</button>
      </div>
      <div className="products">
        {filteredProducts.map((nike) => (
          <Product nike={nike} key={nike.id} />
        ))}
      </div>
    </div>
  );
}
