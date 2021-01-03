import React, { useState,useEffect } from 'react'
import currencyFormatter  from 'currency-formatter';
import {useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {BsDash, BsPlus} from 'react-icons/bs'



function Details() {

    const [quantity, setQantity] = useState(1);

    const {id} = useParams();
    const dispatch = useDispatch();
    const {product} = useSelector(state=>state.ProductReducer);
    useEffect(()=>{
        dispatch({type: 'PRODUCT', id})
    },[id]);

    const decrement=()=>{
        if(quantity > 1){
            setQantity(quantity-1)
        }
    }

    return (
        <div className='container mt-100'>
            <div className='row'>
                <div className='col-6'>
                    <div class='details__images'>
                        <img src={`/images/${product.image}`} alt='images'/>
                    </div>
                </div>
                <div className='col-6 '>
                    <div className='details__name'>
                        {product.name}
                    </div>
                    <div class='details__price'>
                        <div className='details__actual'>
                           {currencyFormatter.format(product.price, { code: 'USD' })}
                           
                        </div>
                        <div className='details__discount'>
                        <span>Price :</span> {currencyFormatter.format(product.discountPrice, { code: 'USD' })}
                        </div>

                        <div className='details__info'>
                            <span className='dec' onClick={decrement}><BsDash /></span>
                            <span className='quantity'>{quantity}</span>
                            <span className='inc' onClick={()=>setQantity(quantity+1)}><BsPlus/></span>
                            <button className='details__addcart' onClick={()=>dispatch({type: 'ADD_TO_CART', payload:{product , quantity}})}>Add Cart</button>
                        </div>
                    <div className='details__description'>
                        {product.desc}
                    </div>
                    
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Details
