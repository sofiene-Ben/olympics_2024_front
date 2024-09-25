import React from 'react'
import { useState, useEffect } from 'react'
import Card from '../Card'

const Offers = () => {
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        const fetchOffers = async () => {
            try {
                const response = await fetch('http://127.0.0.1:5000/api/show-offers');
                // console.log('Response:', response);
                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(`HTTP error! Status: ${response.status} - ${errorText}`);
                  }

                const data = await response.json();
                setOffers(data);
            } catch (error) {
                console.error('Error fetching offers:', error.message);
                
            }  
        };
        fetchOffers();
    }, [])

  return (
    <section>
        <div>
            {offers.map((offer) => (
                <Card key={offer.id} offer={offer} /> // Assure-toi que chaque offre a un identifiant unique
            ))}
        </div>
    </section>
  )
}

export default Offers