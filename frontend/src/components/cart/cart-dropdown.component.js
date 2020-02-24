import React from "react";

import { connect } from 'react-redux';

import CustomButton from "../layout/custom-buttom.component";

import "./cart-dropdown.styles.scss";

import { selectCartItems } from "./cart_selectors";

import CartItem from './cart-item.component';

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
   
  </div>
);


const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});



export default connect(mapStateToProps)(CartDropdown);
