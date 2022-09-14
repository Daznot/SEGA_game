import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signData } from './store/userReducer/reducer';

import App from './components/App/App';
import Main from './components/Main/Main';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import Profile from './components/Profile/Profile';
import Rating from './components/Rating/Rating';
import NoPage from './components/NoPage/NoPage';
import GameMenu from './components/GameMenu/GameMenu';
import ProfileHero from './components/ProfileHero/ProfileHero';
import Chat from './components/Chat/Chat';
import Avatar from './components/Avatar/Avatar';

export default function Map() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  React.useEffect(() => {
    dispatch(signData());

    // <backgroundSound>
    const playBgSound = () => {
      const bgSound = new Audio('/sound/background_athoner.mp3');
      bgSound.play();
      bgSound.loop = true;
    };

    document.addEventListener(
      'click',
      playBgSound,
      { once: true },
    );
    // </backgroundSound>
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="avatar" element={<Avatar />} />
        {user
          ? (
            <>
              <Route path="/" element={<GameMenu />} />
              <Route index path="game" element={<App />} />
              <Route path="profileHero" element={<ProfileHero />} />
              <Route path="main" element={<Main />} />
              <Route path="profile" element={<Profile />}>
                <Route path=":id" element={<Profile />} />
              </Route>
              <Route path="avatar" element={<Avatar />} />
              <Route path="rating" element={<Rating />}>
                <Route path="page/:page" element={<Rating />} />
              </Route>
              <Route path="sign">
                <Route path="out" element={<GameMenu />} />
                <Route path="in" element={<Signin />} />
                <Route path="up" element={<Signup />} />
              </Route>
              <Route path="chat" element={<Chat />} />
            </>
          )
          : (
            <>
              <Route path="/" element={<GameMenu />} />
              <Route path="sign">
                <Route path="in" element={<Signin />} />
                <Route path="up" element={<Signup />} />
              </Route>
              <Route path="*" element={<NoPage />} />
            </>
          )}

      </Routes>
    </BrowserRouter>
  );
}
