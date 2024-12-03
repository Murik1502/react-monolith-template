import { fetchUsersResponse } from '../hooks/useFetchUser/types';
import axios from 'axios';

export const fetchUsers = async () => {
  const response = await axios.get<fetchUsersResponse[]>('https://jsonplaceholder.typicode.com/users');

  return response.data;
};
