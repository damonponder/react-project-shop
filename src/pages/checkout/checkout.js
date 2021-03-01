import React from 'react'
import { connect } from 'react-redux'

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
        <div className='cart-item-name'>
            <span>Cart Item Names</span>
        </div>

        <div className='total'>
                <span >TOTAL: ${total}</span>
            </div>
    </div>
);

    const mapStateToProps = ({ cart: {cartItems} }) => ({
        cartItems: cartItems.reduce(
            (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
            0),
            total: cartItems.reduce(
                (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity * cartItem.price,
                0),
    })

export default connect(
    mapStateToProps)
(CheckOutPage);
