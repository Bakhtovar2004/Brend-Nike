import React from 'react'
import { FcLike } from 'react-icons/fc'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../store/reducer/Cart'
import { addToFavourite } from '../../store/reducer/Favourite'

export default function Product({ nike }) {

    const dispatch = useDispatch()

    return (
        <div>
            <div className="card">
                <Link to={`/product/${nike.id}`} key={nike.id}>
                    <img src={nike.src} alt="" />
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
                        <div >
                            <div className='trash'>
                                <button onClick={() => dispatch(addToFavourite(nike))} className='icon'><FcLike className='icons' /></button>
                                <button onClick={() => dispatch(addToCart(nike))} className='iconTrash'>Add to Bag</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            </div>

        </div>
    )
}

