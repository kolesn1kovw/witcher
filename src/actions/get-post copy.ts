import { API_URL } from '@/config/constants';
import { Post } from '@/types/post';

export const getPosts = async (offset: number, limit: number) => {
  const url = `${API_URL}?_start=${offset}&_limit=${limit}`;

  try {
    const response = await fetch(url);
    const data = (await response.json()) as Post[];

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
