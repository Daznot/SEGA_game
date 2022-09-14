/* eslint-disable react/prop-types */
import React from 'react';
import './Enemy_Style.css';

function Enemy2({ enemy2 }) {
  return (
    <div
      className="enemy"
      style={{
        transform: ` translate(${enemy2.x}px, ${enemy2.y}px) scale(${enemy2.move}, 1)`,
        width: `${enemy2.w}px`,
        height: `${enemy2.h}px`,
        zIndex: `${enemy2.y}`,
      }}
    >
      <img
        src={`${enemy2.skin}`} // скин врака
        alt={`${enemy2.move}`} // зеркалим скин
      />
    </div>
  );
}

export default Enemy2;
