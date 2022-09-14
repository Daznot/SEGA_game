/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './style.css';

function GoldCoin({ coin }) {
  return (
    <div
      style={{
        transform: `translate(${coin.x}px, ${coin.y}px)`,
        width: `${coin.w}px`,
        height: `${coin.h}px`,
        zIndex: `${coin.y}`,
      }}
      className="coin"
    >
      <img
        src={`${coin.skin}`}
        alt={`${coin.move}`}
      />
    </div>
  );
}

export default GoldCoin;
