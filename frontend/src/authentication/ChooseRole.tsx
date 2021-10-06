import { ReactElement, useContext, VFC } from 'react';
import { AuthenticationContext } from '../contexts/AuthenticationContext';
import { Role } from '../domain/role';
import { useEthers } from '@usedapp/core';

const renderRole = (role: Role, assumeRole: (role: Role) => void): ReactElement => {

  if(role.type === "INDIVIDUAL") {
    return <div>INDIVIDUAL : <b>{role.name}</b><button onClick={() => assumeRole(role)}>Use this identity</button> </div>
  }
  if(role.type === "COMPANY") {
    return <div>COMPANY : <b>{role.name}</b><button onClick={() => assumeRole(role)}>Use this identity</button> </div>
  }
  if(role.type === "ISSUER") {
    return <div>ISSUER : <b>{role.name}</b><button onClick={() => assumeRole(role)}>Use this identity</button> </div>
  }

  throw new Error('Unknown role');
}

export const ChooseRole: VFC= () => {

  const {state, assumeRole} = useContext(AuthenticationContext);
  const {deactivate, account} = useEthers();

  if(state.status !== 'AUTHENTICATED') {
    throw new Error('Bad state');
  }

  return <div>
    Address used : {account}
    <ol>
    {state.availableRoles.map((role) => (<li key={role.name}>
      {renderRole(role, assumeRole)}
  </li>))}

  </ol>
    <button onClick={() => deactivate()}>Logout</button>
  </div>

}
