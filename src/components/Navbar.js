import React from 'react'
import {Link} from 'react-router-dom';
import { BsFillBagFill } from "react-icons/bs";
import {useSelector} from 'react-redux';


function Navbar() {
    const {totalQuantity} = useSelector(state=> state.CartReducer);
    return (
        <div>
            <div className='navBar'>
                <div className='container'>
                    <div className='nav__container'>
                    <div className='container__Left'>
                            <Link to='/'>
                              <img src='/images/logo.webp' alt='log' />
                            </Link>
                </div>
                <div className='container__Right'>

                        <Link to='/cart'>
                        <div className='basket'>
                            <BsFillBagFill className='cart' />
                            <span>{totalQuantity}</span>
                        </div>
                        </Link>
                    
                </div>
              </div>
            </div>
            </div>
        </div>
    )
}

export default Navbar
