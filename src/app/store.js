import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

import vagasReducer from '../pages/carreiras/carreirasSlice';
import vagaReducer from '../pages/carreiras/vagaSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    vagas: vagasReducer,
    vaga: vagaReducer
  },
});
