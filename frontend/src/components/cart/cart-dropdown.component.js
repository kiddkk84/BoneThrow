import React from "react";

import { connect } from 'react-redux';

import CustomButton from "../layout/custom-buttom.component";

import "./cart-dropdown.styles.scss";

import { selectCartItems } from "./cart_selectors";

import CartItem from './cart-item.component';

import { withRouter } from "react-router-dom";

import { toggleCartHidden } from '../../actions/cart_action'

import { createStructuredSelector } from "reselect";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <CustomButton onClick={() => { 
      history.push("/checkout"); 
      dispatch(toggleCartHidden());
      }} >GO TO CHECKOUT
    </CustomButton>
  </div>
);


const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});


export default withRouter(connect(mapStateToProps)(CartDropdown));