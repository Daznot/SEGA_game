/* eslint-disable react/prop-types */
import React from 'react';
import './Enemy_Style.css';

function Enemy2({ enemy3 }) {
  return (
    <div
      className="enemy"
      style={{
        transform: ` translate(${enemy3.x}px, ${enemy3.y}px) scale(${enemy3.move}, 1)`,
        width: `${enemy3.w}px`,
        height: `${enemy3.h}px`,
        zIndex: `${enemy3.y}`,
      }}
    >
      <img
        src={`${enemy3.skin}`} // скин врака
        alt={`${enemy3.move}`} // зеркалим скин
      />
    </div>
  );
}

export default Enemy2;
