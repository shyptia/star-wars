import {ResponseData} from '../types';

export async function getPaginatedData({
  name,
  page,
}: {
  page: number;
  name: string;
}) {
  try {
    const response = await fetch(
      `https://swapi.dev/api/people/?page=${page}&search=${name}`,
    );
    const data: ResponseData = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}
