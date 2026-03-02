import React from 'react';

function AboutUs() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
      <h1 style={{ color: '#2ecc71' }}>About Us</h1>
      <p>Ethio-Market is a professional marketplace designed to connect buyers and sellers easily and securely.</p>
      
      <h3>Our Mission</h3>
      <p>We aim to empower local businesses by providing a digital storefront where they can reach customers across the country. Our focus is on direct communication and transparency.</p>
      
      <h3>How It Works</h3>
      <ul>
        <li><strong>Sellers:</strong> Register and post products with photos and prices.</li>
        <li><strong>Buyers:</strong> Browse items and message sellers directly via DM or phone.</li>
        <li><strong>Trust:</strong> Use our rating system to choose reliable partners.</li>
      </ul>
    </div>
  );
}

export default AboutUs;
