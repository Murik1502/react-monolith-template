import { useFetchUsers } from '@/entities/users/hooks/useFetchUser';
import React, { useEffect, useState } from 'react';

export const HelloWorld = () => {
  const [users, setUsers] = useState([]);

  const { data, isLoading } = useFetchUsers();

  useEffect(() => {
    if (data) {
      setUsers(data);
    }
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div>{JSON.stringify(users, null, 2)}</div>;
};
