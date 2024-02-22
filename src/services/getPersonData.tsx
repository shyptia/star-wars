import {PersonData} from '../types';

export async function getPersonData(url: string) {
  try {
    const response = await fetch(url);
    const data: PersonData = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}
