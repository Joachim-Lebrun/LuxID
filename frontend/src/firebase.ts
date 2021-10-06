import { initializeApp } from '@firebase/app';
import { collection, doc, getDocs, getFirestore, query, setDoc, where } from '@firebase/firestore';

const firebase = initializeApp({
  projectId: 'hackaton-luxid'
});

const db = getFirestore(firebase);
const claims = collection(db, "claims");

export interface Claim {
  id: string;
  identity: string;
  issued: boolean;
  signature: string;
  content: any;
  encodedContent: string;
  publicData: string;
  claimIssuer: string;
}

export async function createClaim(claim: Claim) {
  await setDoc(doc(db, "claims", claim.id), claim)
}

export async function getClaimsForIdentity(identity: string): Promise<Claim[]> {
  let cs: Claim[] = [];
  const r = await getDocs(query(claims, where("identity", "==", identity)));
  r.forEach(c => cs.push(c.data() as Claim));
  return cs;
}
