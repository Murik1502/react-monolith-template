import { useQuery } from '@tanstack/react-query';

import { fetchUsers } from '../../api';
import { fetchUsersResponse } from './types';

export const useFetchUsers = () => {
  const { data, isLoading } = useQuery<fetchUsersResponse[]>({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await fetchUsers();

      return res;
    },
  });

  return { data, isLoading };
};
