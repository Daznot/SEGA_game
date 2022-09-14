/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';
import './style.css';

function Bullet({ bullet }) {
  const { bullets } = useSelector((state) => state.game);
  // console.log(bullets.x);
  return (
    <div>
      {bullets
        && (
        <div
          style={{
            transform: `translate(${bullet.x.toString()}px, ${bullet.y.toString()}px) 
            rotate(${bullet.corner.toString()}deg)`,
          }}
          className="bullet"
        />
        )}
    </div>
  );
}

export default Bullet;
