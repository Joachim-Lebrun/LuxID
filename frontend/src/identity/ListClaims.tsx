import { useCallback, useEffect, useState, VFC } from 'react';
import { Claim, createClaim, getClaimsForIdentity } from '../firebase';
import { Identity__factory } from '../contracts';
import { useEthers } from '@usedapp/core';
import QRCode from 'react-qr-code';

export const ListClaims: VFC = () => {
  const [claims, setClaims] = useState<Claim[]>([]);
  const {library} = useEthers();

  useEffect(() => {
    (async() => {
      setClaims(await getClaimsForIdentity('0xbF3De47eCD60aBAfD577BdC714e2E58Dc3b532f1'));
    })();
  }, []);

  const issueClaim = useCallback((c: Claim) => async () => {
    const identity = Identity__factory.connect("0xbF3De47eCD60aBAfD577BdC714e2E58Dc3b532f1", library!.getSigner());
    await identity.addClaim(1,1, c.claimIssuer, c.signature, c.publicData, '');
    await createClaim({...c, issued: true});
    setClaims(await getClaimsForIdentity('0xbF3De47eCD60aBAfD577BdC714e2E58Dc3b532f1'));
  }, [])

  return <div>
    {claims.map((c) => <div key={c.id}>
    Type : {c.content.type}
    Amount : {c.content.amount}
    Currency : {c.content.currency}
    {!c.issued && <div>Ready to be issued<button onClick={issueClaim(c)}>Issue</button></div>}
    {c.issued}Already issued
      <div className="HpQrcode">
        <QRCode value={JSON.stringify({privateData: c.encodedContent, signature: c.signature, claimIssuer: c.claimIssuer})}/>
      </div>
  </div>)}
  </div>
}
