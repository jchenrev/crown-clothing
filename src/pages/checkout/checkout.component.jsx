import React, { useContext } from "react";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripCheckoutButton from "../../components/collections-overview/stripe-button/stripe-button.component";
import { CartContext } from "../../providers/cart/cart.provider";

import "./checkout.styles.scss";

const CheckoutPage = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(item => (
        <CheckoutItem key={item.id} cartItem={item} />
      ))}
      <div className="total">
        <span>TOTAL: ${cartTotal}</span>
      </div>
      <div className="test-warning">
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: any future date - CVV: any 3 digits
      </div>
      <StripCheckoutButton price={cartTotal} />
    </div>
  );
};

export default CheckoutPage;
