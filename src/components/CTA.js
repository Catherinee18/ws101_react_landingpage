import React from 'react';

const CTA = () => {
  const showAlert = () => {
    alert('Let’s get started!');
  };

  return (
    <section id="cta">
      <h2>Start Your Journey</h2>
      <p>Join our community and learn how to create stunning websites today!</p>
      <button onClick={showAlert}>Get Started</button>
    </section>
  );
};

export default CTA;
