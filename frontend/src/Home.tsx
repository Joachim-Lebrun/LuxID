import { useContext, VFC } from 'react';
import { AuthenticationContext } from './contexts/AuthenticationContext';

export interface HomeProps {

}

export const Home: VFC<HomeProps> = () => {
  const {state} = useContext(AuthenticationContext);

  if(state.status === 'NOT_AUTHENTICATED' || !state.assumedRole)
    throw new Error('BAD_STATE');


  return <div>Authenticated as {state.assumedRole.name}</div>;
}
