import { useCallback, useContext, useLayoutEffect, useState, VFC } from 'react';
import { AuthenticationContext } from '../contexts/AuthenticationContext';
import { Home } from '../Home';
import { useEthers } from '@usedapp/core';
import { ChooseRole } from './ChooseRole';
import { useContainer } from '../contexts/ContainerContext';
import { Bar } from '../components/Bar';

export const Login: VFC = () => {
  const {state, logout, login} = useContext(AuthenticationContext);

  const [loading, setLoading] = useState(true);
  const {account, activateBrowserWallet} = useEthers();
  const {roleService} = useContainer();

  useLayoutEffect(() => {
    (async () => {
      setLoading(true);
      if (account) {
        const roles = await roleService.retrieveRoleForAddress(account);
        login(account, roles);
      } else {
        logout();
      }
      setLoading(false);
    })();
  }, [account, login, logout, roleService])

  const onButtonClick = useCallback(() => {
    activateBrowserWallet();
  }, [activateBrowserWallet]);

  if(loading) return <p>LOADING</p>;

  if(state.status === 'AUTHENTICATED') {
    if(state.assumedRole === undefined)
      return <Bar>
        <ChooseRole/>
      </Bar>;
    else
      return <Bar>
        <Home/>
    </Bar>;
  }

  return <button onClick={onButtonClick}>Login with metamask {account}</button>;
}
