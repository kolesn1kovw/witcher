import { configureStore } from '@reduxjs/toolkit';
import actorsReducer from './slices/actorsSlice';
import framesReducer from './slices/framesSlice';

export const store = configureStore({
  reducer: {
    actors: actorsReducer,
    frames: framesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
