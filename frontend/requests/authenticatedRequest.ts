import axios from 'axios';

export const authenticatedRequest = (jwt: string) => {
  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_HOST,
    headers: {
      Authorization: `Bearer ${jwt}`,
      'Content-Type': 'application/json',
    },
  });
};
