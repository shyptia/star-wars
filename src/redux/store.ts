import {configureStore} from '@reduxjs/toolkit';
import selectedPeopleReducer from './reducers/selectedPeopleSlice';
import {useDispatch} from 'react-redux';

export const store = configureStore({
  reducer: {
    selectedPeople: selectedPeopleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
