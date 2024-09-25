import React, { useState, useEffect } from 'react';

const AdminDashboard = () => {

    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);
  
    useEffect(() => {
      // Faire la requête à l'API Flask
      const fetchDashboard = async () => {
        try {
          const response = await fetch('http://localhost:5000/admin/dashboard', {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('auth_token')}`, // Remplacer par le token Auth0 stocké
            },
          });
  
          if (!response.ok) {
            throw new Error('Erreur lors de la récupération des données');
          }
  
          const data = await response.json();
          setMessage(data.message);
        } catch (err) {
          setError(err.message);
        }
      };
  
      fetchDashboard();
    }, []);

  return (
        <div>
      {error ? <p>{error}</p> : <h1>{message}</h1>}
    </div>
  )
}

export default AdminDashboard