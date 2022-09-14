import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { userAllStats } from '../../store/gameReducer/reducer';
import { format } from '../Profile/Profile';
import './Rating.css';

function Rating() {
  const { statistic } = useSelector((state) => state.game);
  const dispatch = useDispatch();
  useEffect((event) => {
    dispatch(userAllStats(event));
  }, []);

  return (
    <div className="center anim-show-rating">
      <h1>
        <span className="blue">TOP</span>
        {' '}
        <span className="yellow">USERS</span>
      </h1>

      <table className="container-rating">
        <thead>
          <tr>
            <th>
              <h1>Player</h1>
            </th>
            <th>
              <h1>Time Game</h1>
            </th>
            <th>
              <h1>Games</h1>
            </th>
            <th>
              <h1>Kill Enemies</h1>
            </th>
          </tr>
        </thead>
        <tbody>
          {statistic.map((o) => (
            <tr>
              <td>{o['User.name']}</td>
              <td>{format(o['Game.timeGame'])}</td>
              <td>{o['Game.countGames']}</td>
              <td>{o['Game.countEnemies']}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="score-box-rating">
        <p className="score-rating" />
        <Link className="return-rating" to="/">
          &lt;&lt; НАЗАД
        </Link>
      </div>
    </div>
  );
}

export default Rating;
