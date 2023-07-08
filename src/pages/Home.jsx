import React, { useState } from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Products from '../components/products/Products';
import Slider from '../components/slider/Slider';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <Header onSearch={handleSearch} />
      <Slider />
      <Products searchQuery={searchQuery} />
      <Footer />
    </div>
  );
}
