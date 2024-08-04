import { API_URL } from '@/config/constants';
import { Frame } from '@/types/frame';

export const getPosts = async (offset: number, limit: number) => {
  const url = `${API_URL}?page=${offset}&limit=${limit}`;

  try {
    const response = await fetch(url);
    const data = (await response.json()) as Frame[];

    if (!response.ok) {
      console.error('something when wrong!');
      return [];
    }

    return data;
  } catch (error: unknown) {
    console.log(error);
    return [];
  }
};