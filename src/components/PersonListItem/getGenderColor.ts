import {Gender} from '../../types';

export const getGenderColor = (gender: Gender) => {
  switch (gender) {
    case 'female':
      return '#d687d3';
    case 'male':
      return '#87bad6';
    default:
      return '#c4b4b1';
  }
};
