import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userReducer/reducer';
import gameReducer from './gameReducer/reducer';
import chatReducer from './chatReducer/reducer';

export default configureStore({
  reducer: {
    user: userReducer,
    game: gameReducer,
    chat: chatReducer,
  },
});
