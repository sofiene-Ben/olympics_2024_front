import React from 'react';
import CartItemIncreaseBtn from './CartItemIncreaseBtn';

const CartItem = ({ item, onAdd }) => {
    return (
        <div className="cart-item">
            <h3>{item.offer_name}</h3>
            <p>Prix: ${item.price}</p>
            <p>Quantité: {item.quantity}</p>
            <p>Sous-total: ${item.subtotal}</p>
            <CartItemIncreaseBtn item={item} onAdd={onAdd} />
        </div>
    );
};

export default CartItem;
