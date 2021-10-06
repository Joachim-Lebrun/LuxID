import { ReactElement, useContext, useState, VFC } from 'react';
import { AuthenticationContext } from '../contexts/AuthenticationContext';
import { Role } from '../domain/role';
import { useEthers } from '@usedapp/core';
import {Button, Grid} from "@mui/material";
import '../style/style.css';

import { VerifyQrCode } from '../verify/VerifyQrCode';

const renderRole = (role: Role, assumeRole: (role: Role) => void): ReactElement => {

  if(role.type === "INDIVIDUAL") {
    return <div className="gridItem"><Grid container rowSpacing={1} spacing={2}><Grid item xs={2}>INDIVIDUAL :</Grid> <Grid item xs={2}><b>{role.name}</b></Grid><Grid item xs={2}><Button variant="contained" onClick={() => assumeRole(role)}>Use this identity</Button></Grid></Grid> </div>
  }
  if(role.type === "COMPANY") {
    return <div className="gridItem"><Grid container rowSpacing={1} spacing={2}><Grid item xs={2}>COMPANY :</Grid> <Grid item xs={2}> <b>{role.name}</b></Grid><Grid item xs={2}><Button variant="contained" onClick={() => assumeRole(role)}>Use this identity</Button></Grid></Grid> </div>
  }
  if(role.type === "ISSUER") {
    return <div className="gridItem"><Grid container rowSpacing={1} spacing={2}><Grid item xs={2}>ISSUER :</Grid> <Grid item xs={2}> <b>{role.name}</b></Grid><Grid item xs={2}><Button variant="contained" onClick={() => assumeRole(role)}>Use this identity</Button></Grid></Grid> </div>
  }

  throw new Error('Unknown role');
}

export const ChooseRole: VFC= () => {

  const {state, assumeRole} = useContext(AuthenticationContext);
  const {deactivate, account} = useEthers();
  const [verify, setVerify] = useState(false);

  if(state.status !== 'AUTHENTICATED') {
    throw new Error('Bad state');
  }

  if(verify) return <VerifyQrCode/>

  return <div>
    <ol>
    {state.availableRoles.map((role) => (<li key={role.name}>
      {renderRole(role, assumeRole)}
  </li>))}

  </ol>
    <Button variant="contained" onClick={() => deactivate()}>Logout</Button>
    <button onClick={() => setVerify(true)}>Verify QR code</button>
  </div>

}
