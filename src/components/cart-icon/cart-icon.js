import React from 'react'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import { connect } from 'react-redux'
import {selectCartItemsCount} from "../../redux/actions/cart/cart.selector";
import { ToggleCartHidden } from '../../redux/actions/cart/cart.action';
import './cart-icon.style.scss'


const CartIcon = ({ ToggleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={ToggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    ToggleCartHidden: () => dispatch(ToggleCartHidden())
});

const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartIcon);