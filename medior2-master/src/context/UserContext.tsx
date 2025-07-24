'use client';

import { createContext, useContext, useState, ReactNode, JSX } from 'react';
import { MinimalUserType } from '@/types/minimalUserType';

type UserContextType = {
  users: MinimalUserType[];
  setUsers: React.Dispatch<React.SetStateAction<MinimalUserType[]>>;
};

const defaultContext: UserContextType = {
  users: [],
  setUsers: () => {},
};

const UserContext = createContext<UserContextType>(defaultContext);

export const useUserContext = (): UserContextType => useContext(UserContext);

// eslint-disable-next-line import/no-unused-modules
export const UserProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const [users, setUsers] = useState<MinimalUserType[]>([]);
  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};
