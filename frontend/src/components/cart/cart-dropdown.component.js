import React from "react";

import CustomButton from "../layout/custom-buttom.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <CustomButton>GO TO CHECKOUT</CustomButton>
   
  </div>
);

export default CartDropdown;
