/* eslint-disable react/prop-types */
import React from 'react';
import './Enemy_Style.css';

function Enemy2({ enemy4 }) {
  return (
    <div
      className="enemy"
      style={{
        transform: ` translate(${enemy4.x}px, ${enemy4.y}px) scale(${enemy4.move}, 1)`,
        width: `${enemy4.w}px`,
        height: `${enemy4.h}px`,
        zIndex: `${enemy4.y}`,
      }}
    >
      <img
        src={`${enemy4.skin}`} // скин врака
        alt={`${enemy4.move}`} // зеркалим скин
      />
    </div>
  );
}

export default Enemy2;
