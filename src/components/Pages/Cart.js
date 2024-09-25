import React, { useState, useEffect } from 'react';
import CartItem from '../CartItem';
import { useAuth0 } from '@auth0/auth0-react';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const { getAccessTokenSilently } = useAuth0();

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const token = await getAccessTokenSilently();
                const response = await fetch('http://127.0.0.1:5000/cart', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération du panier');
                }

                const data = await response.json();
                setCartItems(data.cart_items);
                setTotalAmount(data.total_amount);
            } catch (error) {
                console.error('Erreur:', error);
            }
        };

        fetchCartItems();
    }, [getAccessTokenSilently]); // Ajoute la fonction comme dépendance pour éviter des avertissements

    const handleAdd = (offer) => {
        // Logique pour mettre à jour le panier si nécessaire
        // Par exemple, tu peux rafraîchir le panier ici après avoir ajouté un item
    };

    return (
        <div className="cart">
            <h2>Mon Panier</h2>
            {cartItems.length === 0 ? (
                <p>Votre panier est vide.</p>
            ) : (
                cartItems.map((item, index) => (
                    <CartItem key={index} item={item} onAdd={handleAdd} />
                ))
            )}
            <h3>Total : ${totalAmount}</h3>
        </div>
    );
};

export default Cart;
