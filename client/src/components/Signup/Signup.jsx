import React, { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../../store/userReducer/reducer';
import './Signup.css';

export default function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, error } = useSelector((state) => state.user);
  const signUpForm = useRef();

  const onSubmit = useCallback(
    (event) => {
      event.preventDefault();
      event.stopPropagation();
      dispatch(signUp(event));
    },
    [signUpForm],
  );

  useEffect(() => {
    if (user && user.id) {
      navigate('/');
    }
  }, [user]);

  return (
    <div className="registr-box anim-show-signup nes-container is-rounded is-dark forms anim-show-singup">
      <h1>
        <span className="blue">LET&apos;S</span>
        {' '}
        <span className="yellow">PLAY!</span>
      </h1>
      <form
        className="form"
        autoComplete="off"
        ref={signUpForm}
        onSubmit={onSubmit}
      >
        <div className="input-section input-section nes-field">
          <i className="far" />
          <input
            required
            name="name"
            className="nes-input"
            type="text"
            placeholder="Name"
            style={{ color: 'black' }}
          />
        </div>
        <div className="input-section input-section nes-field">
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
        <div className="input-section input-section nes-field">
          <i className="fas" />
          <input
            required
            name="password"
            className="nes-input"
            type="password"
            placeholder="Password"
            style={{ color: 'black' }}
          />
        </div>
        <div className="input-section input-section nes-field">
          <i className="fas" />
          <input
            required
            name="pswdcfrm"
            className="nes-input"
            type="password"
            placeholder="Password confirm"
            style={{ color: 'black' }}
          />
        </div>
        <button type="submit" className="nes-btn is-primary nes-in nes-up" id="login-btn">
          Зарегистрироваться
        </button>
        { error !== false && <div className="error_mes">{error}</div> }
      </form>
    </div>
  );
}
