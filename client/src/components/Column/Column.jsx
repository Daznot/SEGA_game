import React from 'react';
import { useSelector } from 'react-redux';
import './Column.css';

function Column() {
  const { column } = useSelector((state) => state.game);

  return (
    <div
      className="Column"
      style={{
        transform: ` translate(${column.x}px, ${column.y}px)`,
        width: `${column.w}px`,
        height: `${column.h}px`,
        zIndex: '200',
      }}
    >
      <img
        src={`${column.skin}`} // скин игрока
        alt="" // зеркалим скин
      />
    </div>
  );
}

export default Column;
