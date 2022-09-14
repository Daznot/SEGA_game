import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css';

export default function Main() {
  return (
    <nav className="anim-show-main">
      <ul>
        <li>
          <Link to="/">Start</Link>
        </li>
      </ul>
    </nav>
  );
}
