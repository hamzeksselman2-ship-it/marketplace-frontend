import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from '../config';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/products`)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.log("Backend not connected yet."));
  }, []);

  return (
    <div className="home-page">
      <section style={{ textAlign: 'center', padding: '40px 0' }}>
        <h1>Welcome to Ethio-Market</h1>
        <p>Find quality products and connect with local sellers instantly.</p>
        <input type="text" placeholder="Search for products..." style={{ padding: '10px', width: '60%', borderRadius: '20px', border: '1px solid #ddd' }} />
      </section>

      <div className="product-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
        {products.length > 0 ? products.map(p => (
          <div key={p._id} className="card" style={{ border: '1px solid #eee', padding: '10px', borderRadius: '8px' }}>
            <img src={p.imageUrl} alt={p.title} style={{ width: '100%', borderRadius: '5px' }} />
            <h3>{p.title}</h3>
            <p>${p.price}</p>
            <Link to={`/product/${p._id}`} style={{ color: '#2ecc71', fontWeight: 'bold' }}>View Details</Link>
          </div>
        )) : <p style={{ textAlign: 'center', width: '100%' }}>No products found. Be the first to post!</p>}
      </div>
    </div>
  );
}

export default Home;
