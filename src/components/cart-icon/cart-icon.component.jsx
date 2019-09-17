import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assests/shopping-bag.svg';
import './cart-icon.styles.scss';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {connect} from 'react-redux';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'></ShoppingIcon>
        <span className='item-count'>{itemCount}</span>
    </div>
);
const mapDispatchToProps = (dispath) => ({
    toggleCartHidden : () => dispath(toggleCartHidden())
});

const mapStateToProps = state => ({
    itemCount : selectCartItemsCount(state)
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);