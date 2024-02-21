import {ResponseData} from '../types';

export async function getPaginatedData(page: number) {
  try {
    const response = await fetch(`https://swapi.dev/api/people/?page=${page}`);
    const data: ResponseData = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}
