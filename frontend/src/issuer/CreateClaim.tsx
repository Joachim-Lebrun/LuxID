import { useCallback, useState, VFC } from 'react';
import { useEthers } from '@usedapp/core';
import {ethers} from 'ethers';
import { createClaim } from '../firebase';
import * as uuid from 'uuid';
import {Button, Grid, InputLabel, Select, TextField} from "@mui/material";
import "../style/style.css";

export const CreateClaim: VFC = () => {
  const [address, setAddress] = useState<string>('');
  const [type, setType] = useState<'BUY' | 'SELL'>('BUY');
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('');

  const {library} = useEthers();

  const submit = useCallback(async (e: any) => {
    e.preventDefault();
    console.log({address, currency, amount, type});
    if(address === '' || currency === '' || !(+amount > 0)) {
      return;
    }

    const privateData = {
      identity: address,
      type,
      amount,
      currency,
    }

    const encodedContent = JSON.stringify(privateData);

    const hex = Buffer.from(encodedContent, 'utf8').toString('hex');

    const publicData = ethers.utils.keccak256(ethers.utils.arrayify("0x"+ hex));

    const hash = ethers.utils.solidityKeccak256(['address', 'uint256', 'bytes'], [address, 1, publicData])

    const signature = (await library!.getSigner().signMessage(hash));

    console.log(uuid.v4());

    await createClaim({
      id: uuid.v4(),
      issued: false,
      content: privateData,
      publicData: publicData,
      encodedContent,
      signature,
      identity: address,
      claimIssuer: "0xA2e9b84459Ec4D46ebF23B9eA9f3eB19e44384c5",
    });



  }, [address, type, amount, currency]);

  return <form className="formClaim">
    <Grid container spacing={2}>
      <Grid item xs={1}>
        <p> </p>
      </Grid>
      <Grid item xs={2}>
    <TextField variant="standard" placeholder="Address" onChange={e=>setAddress(e.target.value)}/>
      </Grid>
      <Grid item xs={2}>
    <Select label="action" onChange={e => setType(e.target.value as any)}>
      <option value="BUY">Buy</option>
      <option value="SELL">Sell</option>
    </Select>
      </Grid>
      <Grid item xs={2}>
    <TextField variant="standard" placeholder="Amount" onChange={e=>setAmount(e.target.value)}/>
      </Grid>
      <Grid item xs={2}>
    <TextField variant="standard" placeholder="Currency" onChange={e=>setCurrency(e.target.value)}/>
      </Grid>
      <Grid item xs={2}>
    <Button variant="contained" onClick={submit}>Create claim</Button>
      </Grid>
    </Grid>
  </form>
}
