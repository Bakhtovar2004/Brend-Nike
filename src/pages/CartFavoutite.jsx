import React from 'react'
import { useSelector } from 'react-redux'
import { FcDislike } from 'react-icons/fc'
import { useDispatch } from 'react-redux'
import { deleteFavourite } from '../store/reducer/Favourite'
import './style/CartFavourite.css'
import Header from '../components/header/Header'

export default function CartFavourite() {

    const products = useSelector(state => state.favourite.items)
    const dispatch = useDispatch()

    return (
        <div>
            <Header />
            <div className='favouriteCart'>
                {products.length > 0 ? products.map((product) => (<div>
                    <div className="cards">
                        <img src={product.src} alt="" />
                        <div className='cardName'>
                            <div>
                                <p className='brown'>{product.just}</p>
                                <p>{product.brend}</p>
                                <p>{product.forMen}</p>
                                <p>{product.color}</p>
                                <p>{product.price} $</p>
                            </div>
                            <div className='cardButton'>
                                <div >
                                    <div className='trash'>
                                        <button onClick={() => dispatch(deleteFavourite(product.id))} className='icon'><FcDislike className='icons' /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)) : <div className='layout'>Избранные нет</div>}
            </div>
        </div>
    )
}