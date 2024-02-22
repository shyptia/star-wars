import {RootState} from '../store';

export const selectSelectedPeople = (state: RootState) =>
  state.selectedPeople.selectedPeople;

export const selectFemaleCount = (state: RootState) =>
  state.selectedPeople.selectedPeople.filter(
    person => person.gender === 'female',
  ).length;

export const selectMaleCount = (state: RootState) =>
  state.selectedPeople.selectedPeople.filter(person => person.gender === 'male')
    .length;

export const selectOtherCount = (state: RootState) =>
  state.selectedPeople.selectedPeople.filter(
    person => person.gender !== 'female' && person.gender !== 'male',
  ).length;
