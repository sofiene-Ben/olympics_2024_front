import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const AddToCartBtn = ({ offer, onAdd }) => {
    const { isAuthenticated, getAccessTokenSilently  } = useAuth0();

    const handleAddToCart = async () => {
        if (!isAuthenticated) {
            alert("Vous devez être connecté pour ajouter un article au panier.");
            return;
        }

        try {

            const token = await getAccessTokenSilently();
            const userId = token.sub;

            // Vérifie si l'utilisateur existe dans la base de données
            const userResponse = await fetch(`http://127.0.0.1:5000/users`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ auth0_id: userId }), // Assure-toi que l'ID est correct
            });

            if (!userResponse.ok) {
                const error = await userResponse.json();
                alert(error.message); // Alerte si l'utilisateur n'existe pas
                return;
            }


            const response = await fetch(`http://127.0.0.1:5000/add-to-cart/${offer.id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    quantity: 1,
                }),
            });

            if (!response.ok) {
                throw new Error('Erreur lors de l\'ajout au panier');
            }
    
            const result = await response.json();
            alert(result.message);
            onAdd(offer);
            
        } catch (error) {
            console.error('Error adding to cart:', error);
        }
    }
  return (
    <button onClick={handleAddToCart} className="add-to-cart-btn">
      Ajouter au panier
    </button>
  )
}

export default AddToCartBtn