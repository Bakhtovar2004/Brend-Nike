import React, { useState } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/header/Header';
import '../pages/style/CartBasket.css';
import { decrementQuantity, deleteCart, incrementQuantity } from '../store/reducer/Cart';

export default function CartBasket() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.items);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const calculateTotalSum = () => {
    let totalSum = 0;
    products.forEach((product) => {
      totalSum += product.price;
    });
    return totalSum.toFixed(2);
  };

  return (
    <div>
      <Header />
      <div>
        {products.length > 0 ? (
          products.map((product) => (
            <div>
              <div className='basket'>
                <img src={product.src} alt='' />
                <div>
                  <h2>{product.brend}</h2>
                  <p>{product.forMen}</p>
                </div>
                <div className='count'>
                  <button onClick={() => dispatch(incrementQuantity(product.id))} className='iconTotal'>+</button>
                  <span>{product.quantity}</span>
                  <button onClick={() => dispatch(decrementQuantity(product.id))} className='iconTotal'>-</button>
                </div>
                <h4>{product.price}$</h4>
                <button
                  className='iconTotal'
                  onClick={() => dispatch(deleteCart(product.id))}
                >
                  <BsFillTrashFill />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className='layout'>Карзина пуста</div>
        )}
      </div>
      <div className='order'>
        <p>Общая сумма: {calculateTotalSum()}$</p>
        <button onClick={handleOpenModal}>Оформить заказ</button>
      </div>

      {isModalOpen && (
        <div className='modal'>
          <div className='modal-content'>
            <input type='text' placeholder='Имя' />
            <input type='text' placeholder='Email' />
            <input type='text' placeholder='Адрес доставки' />
            <button onClick={handleCloseModal}>Оформить заказ</button>
          </div>
        </div>
      )}
    </div>
  );
}
