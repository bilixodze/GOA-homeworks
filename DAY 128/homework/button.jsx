import React from 'react';

const Button = ({ label, onClick }) => {
  return (
    <button onClick={onClick} style={{ padding: '10px 20px', margin: '5px', background: '#61dafb', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
      {label}
    </button>
  );
};

export default Button;
