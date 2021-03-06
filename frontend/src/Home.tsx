import { useContext, VFC } from 'react';
import { AuthenticationContext } from './contexts/AuthenticationContext';
import { CreateClaim } from './issuer/CreateClaim';
import { ListClaims } from './identity/ListClaims';

export interface HomeProps {

}

export const Home: VFC<HomeProps> = () => {
  const {state} = useContext(AuthenticationContext);

  if(state.status === 'NOT_AUTHENTICATED' || !state.assumedRole)
    throw new Error('BAD_STATE');

  if(state.assumedRole.type === 'ISSUER')
    return <CreateClaim/>

  if(state.assumedRole.type === 'INDIVIDUAL')
    return <ListClaims/>


  return <div>Authenticated as {state.assumedRole.name}</div>;
}
