import React from 'react';
import { useSelector } from 'react-redux';
import './Hero_Style.css';

function Hero() {
  const { player } = useSelector((state) => state.game);

  return (
    <div
      className="hero"
      style={{
        transform: ` translate(${player.x}px, ${player.y}px) scale(${player.move}, 1)`,
        width: `${player.w}px`,
        height: `${player.h}px`,
        zIndex: `${player.y}`,
      }}
    >
      <img
        src={`${player.skin}`} // скин игрока
        alt={`${player.move}`} // зеркалим скин
      />
    </div>
  );
}

export default Hero;
