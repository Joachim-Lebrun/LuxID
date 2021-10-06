import { initializeApp } from '@firebase/app';
import { doc, getFirestore, setDoc } from '@firebase/firestore';
import * as uuid from 'uuid';

const firebase = initializeApp({
  projectId: 'hackaton-luxid'
});

const db = getFirestore(firebase);

export interface Claim {
  identity: string;
  issued: boolean;
  signature: string;
  content: any;
  encodedContent: string;
  claimIssuer: string;
}

export async function createClaim(claim: Claim) {
  await setDoc(doc(db, "claims", uuid.v4()), claim)
}
