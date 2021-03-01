import React from 'react'
import { connect } from 'react-redux';
import {createStructuredSelector} from "reselect";
import { selectCartItems } from '../../redux/actions/cart/cart.selector'

import './checkout.style.scss'


const CheckOutPage = ({cartItems, total}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {/*{cartItems.map(cartItem => cartItem.name)}*/}
        {/*<div className='total' TOTAL: ${...total}>*/}
       </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default connect(mapStateToProps)(CheckOutPage);