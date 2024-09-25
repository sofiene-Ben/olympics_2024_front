import React from "react";
import AddToCartBtn from "./AddToCartBtn";

const Card = ({ offer }) => {
    const handleAddToCart = (offer) => {
        // Logique pour gérer l'ajout de l'offre au panier
        // console.log(`${offer.name} a été ajouté au panier`);
      };
    return (
      <div className="card">
        <h2>{offer.name}</h2>
        <p>{offer.description}</p>
        <p>Price: ${offer.price}</p>
        <AddToCartBtn offer={offer} onAdd={handleAddToCart} />
        {/* Ajoute d'autres éléments selon la structure de ton offre */}
      </div>
    );
  };
  
  export default Card;
  