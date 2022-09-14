/* eslint-disable react/prop-types */
import React from 'react';
import './Enemy_Style.css';

function Enemy({ enemy }) {
  return (
    <div
      className="enemy"
      style={{
        transform: ` translate(${enemy.x}px, ${enemy.y}px) scale(${enemy.move}, 1)`, // зеркалим скин
        width: `${enemy.w}px`,
        height: `${enemy.h}px`,
        zIndex: `${enemy.y}`,
      }}
    >
      <img
        src={`${enemy.skin}`} // скин врака
        alt=""
      />
    </div>
  );
}

export default Enemy;
