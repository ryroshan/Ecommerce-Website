import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {BsDash, BsPlus} from 'react-icons/bs';
import currencyFormatter  from 'currency-formatter';
import { BsFillTrashFill } from "react-icons/bs";

function Cart() {

    const {products, totalPrice, totalQuantity} = useSelector(state=> state.CartReducer);
    const dispatch = useDispatch();
    console.log(products);
    return (
        <div className='cart_detailss'>
            <div className='cart__container'>
                <h3>YOUR CART</h3>
                {products.length > 0 ? 
                <>
                <div className='row'>
                    <div className='col-9'>
                        <div className='cart__heading'>
                            <div className='row__cart'>
                                <div className='col-2'>Picture</div>
                                <div className='col-2'>Name</div>
                                <div className='col-2'>Price</div>
                                <div className='col-2'>Inc/Dec</div>
                                <div className='col-2'>Total Price</div>
                                <div className='col-2'>Remove</div>
                            </div>
                        </div>
                        {products.map(product=>(
                            <div className='row__De' key={product.id}>
                                <div className='col-2'>
                                    <div className='cart__image'>
                                        <img src={`/images/${product.image}`} alt='cartimage'/>
                                    </div>
                                </div>
                                <div className='col-2'>
                                    <div className='cart__name'>
                                        {product.name}
                                    </div>
                                </div>
                                <div className='col-2'>
                                    <div className='cart__price'>
                                    {currencyFormatter.format(product.price, { code: 'USD' })}
                                    </div>
                                </div>

                                <div className='col-2'>
                                <div className='details__info'>
                            <span className='dec' onClick={()=>dispatch({type: 'DECREMENT', payload: product.id})}><BsDash /></span>
                            <span className='quantity'>{product.quant}</span>
                            <span className='inc' onClick={()=>dispatch({type:'INCREMENT', payload: product.id})}><BsPlus/></span>
        
                             </div>
                                </div>
                                <div className='col-2'>
                                    <div className='cart__totalPrice'>
                                        {currencyFormatter.format(product.discountPrice * product.quant, { code: 'USD' }) }
                                    </div>
                                </div>

                                <div className='col-2'>
                                    <div className='cart__remove' onClick={()=> dispatch({type:'REMOVE', payload: product.id})}>
                                        <BsFillTrashFill />
                                    </div>
                                </div>
                                
                            </div>
                        ))}
                    </div>
                        <div className='col-3'>
                            <div className='summary'>
                                <div className='summary__heading'>
                                summary
                                </div>
                                <div className='summary__details'>
                                    <div className='titems__summary'>
                                        Total Items : <span>{totalQuantity}</span>
                                    </div>
                                    <div className='tprice__summary'>
                                        Total Price : <span>{ currencyFormatter.format(totalPrice, { code: 'USD' }) }</span>
                                    </div>
                                </div>
                                <button className='btn__last'>Check out</button>
                            </div>
                        </div>
                        
                </div>
                </> : <span className='cart__empty'>your cart is empty</span>} 
            </div>
            
        </div>
    )
}

export default Cart
