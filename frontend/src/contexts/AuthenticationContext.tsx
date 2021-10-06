import React, { FC, useCallback, useState } from 'react';
import { Role } from '../domain/role';
import { useEthers } from '@usedapp/core';

export const AuthenticationContext = React.createContext<AuthenticationContextProps>(undefined as unknown as AuthenticationContextProps);

interface AuthenticationContextProps {
  state: AuthenticationState,
  login: (address: string, availableRoles: Role[]) => void;
  logout: () => void;
  assumeRole: (role: Role) => void;
}

type  AuthenticationState = NotAuthenticated | Authenticated;

interface NotAuthenticated {
  status: "NOT_AUTHENTICATED",
}

interface Authenticated {
  status: "AUTHENTICATED"
  address: string;
  availableRoles: Role[];
  assumedRole?: Role;
}

export const AuthenticationProvider: FC = ({children}) => {
  const [state, setState] = useState<AuthenticationState>({
    status: 'NOT_AUTHENTICATED'
  });

  const {deactivate} = useEthers();

  const login = useCallback((address: string, roles: Role[]) => {
    setState({
      status: 'AUTHENTICATED',
      address,
      assumedRole: undefined,
      availableRoles: roles,
    })
  }, [deactivate]);

  const logout = useCallback(() => {
    deactivate();
    setState({
      status: 'NOT_AUTHENTICATED',
    })
  }, []);

  const assumeRole = useCallback((role: Role) => {
    if(state.status !== 'AUTHENTICATED')
      throw new Error('You are not authenticated');
    setState({
      ...state,
      assumedRole: role,
    })
  }, [state])

  const context = {
    state,
    logout,
    login,
    assumeRole
  }

  return <AuthenticationContext.Provider value={context}>
    {children}
    </AuthenticationContext.Provider>
}
