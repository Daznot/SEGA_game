import React, { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../../store/userReducer/reducer';
import './Signin.css';

export default function Signin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, error } = useSelector((state) => state.user);
  const signInForm = useRef();

  const onSubmit = useCallback(
    (event) => {
      event.preventDefault();
      event.stopPropagation();
      dispatch(signIn(event));
    },
    [signInForm],
  );

  useEffect(
    () => {
      if (user && user.id) {
        navigate('/');
      }
    },
    [user],
  );

  return (
    <div className="login-box anim-show-singin nes-container is-rounded is-dark forms">
      <h1>
        <span className="blue">WELCOME</span>
        {' '}
        <span className="yellow">BACK!</span>
      </h1>
      <form className="form_login" autoComplete="off" ref={signInForm} onSubmit={onSubmit}>
        <div className="input-section nes-field">
          <i className="far" />
          <input
            required
            name="email"
            className="nes-input"
            type="email"
            placeholder="Email"
            style={{ color: 'black' }}
          />
        </div>
        <div className="input-section nes-field">
          <i className="fas" />
          <input
            name="password"
            required
            className="nes-input"
            type="password"
            placeholder="Password"
            style={{ color: 'black' }}
          />
        </div>
        <button type="submit" className="nes-btn is-primary nes-up" id="login-btn">
          Войти
        </button>
        { error && <div className="error_mes">Неверный логин или пароль</div> }
      </form>
    </div>
  );
}
