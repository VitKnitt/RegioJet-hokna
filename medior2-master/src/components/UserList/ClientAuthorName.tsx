'use client';

import { useEffect } from 'react';
import { JSX } from 'react/jsx-runtime';
import { useUserContext } from '@/context/UserContext';
import { MinimalUserType } from '@/types/minimalUserType';

type Props = {
  userId: number;
  fallbackName: string;
};

export default function ClientAuthorName({ userId, fallbackName }: Props): JSX.Element {
  const { users, setUsers } = useUserContext();
  const user = users.find((u) => u.id === userId);

  useEffect(() => {
    if (!user) {
      setUsers((prevUsers: MinimalUserType[]) => {
        if (prevUsers.find((u) => u.id === userId)) {
          return prevUsers;
        }

        const newUser: MinimalUserType = {
          id: userId,
          name: fallbackName,
        };
        return [...prevUsers, newUser];
      });
    }
  }, [user, userId, fallbackName, setUsers]);

  return <>{user ? user.name : fallbackName}</>;
}
