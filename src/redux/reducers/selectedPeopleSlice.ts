import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {Gender} from '../../types';

type SelectedPerson = {id: string; gender: Gender};
type SelectedPeopleState = {
  selectedPeople: SelectedPerson[];
};

const initialState: SelectedPeopleState = {
  selectedPeople: [],
};

const selectedPeopleSlice = createSlice({
  name: 'selectedPeople',
  initialState,
  reducers: {
    addSelectedPerson(state, action: PayloadAction<SelectedPerson>) {
      state.selectedPeople.push(action.payload);
    },
    removeSelectedPerson(state, action: PayloadAction<string>) {
      state.selectedPeople = state.selectedPeople.filter(
        person => person.id !== action.payload,
      );
    },
  },
});

export const {addSelectedPerson, removeSelectedPerson} =
  selectedPeopleSlice.actions;

export default selectedPeopleSlice.reducer;
