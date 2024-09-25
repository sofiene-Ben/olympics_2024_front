import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const CartItemIncreaseBtn = ({ item, onUpdate }) => {
    const { getAccessTokenSilently } = useAuth0();

    const handleIncreaseCart = async () => {
        try {
            const token = await getAccessTokenSilently();
            const response = await fetch(`http://127.0.0.1:5000/pluscart?id=${item.offer_id}`, {
                method: 'GET',  // Utilise GET pour incrémenter
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                throw new Error('Erreur lors de l\'ajout au panier');
            }

            const result = await response.json();
            alert(`Quantité mise à jour : ${result.updated_item.quantity}`);
            onUpdate(result.updated_item); // Appelle la fonction pour mettre à jour le panier

        } catch (error) {
            console.error('Error adding to cart:', error);
        }
    }

    return (
        <button onClick={handleIncreaseCart} className="add-to-cart-btn">
            +
        </button>
    );
}

export default CartItemIncreaseBtn;
