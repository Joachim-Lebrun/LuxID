# Infrachain Hackathon : LuxID
## Abstract 
The topic of this Hackathon is to provide a solution able to simplify the paperwork in the Luxembourgish administration and to provide additional trust without any divulgation of private data… The solution that we propose is a combination of Onchain identities (ONCHAINID protocol) with a system of claim validation and emission, we also propose an onchain factory to easily deploy onchain identities on-demand. It is important to understand that this model is valid for individual people but also for companies, and even for smart objects. In this POC we will only adapt it to individuals but it can be extended later on. 
## Implementation 
### Smart Contracts 
The smart contracts infrastructure is containing the following modules : 

- A factory contract for ONCHAINIDs 
- A function containing the mechanisms for the listing of claim requirements
- A function for the verification of an Identity regarding claim requirements 
- A listing of claim issuers trusted by the Luxembourgish authorities 

The identities will be slightly different from the ONCHAINID standard, as it will not be possible for an ONCHAINID owner to remove the MANAGEMENT key of the Luxembourgish authorities from the ONCHAINID, at the creation of the identity, both the authorities and the identity owner will have a MANAGEMENT key on the ONCHAINID
### Back End 
For the management of onchain actions we use Typechain, which automatically creates all the necessary functions for blockchain interactions in typescript 
A classic DB will be used to store private user data, as only a hash/proof of the data is displayed onchain under the form of a claim.  
### Front End
The front end should contain the following user interfaces :

- A page to show the LuxID profile from a user perspective.
- A page to create a LuxID, by providing basic information. 
- A page for the administration to add trusted claim issuers and the claim topic they are trusted for. 
- A page for administration to see new LuxID creation requests 
- A page for the administration to see the details of citizens LuxIDs 

The access to the platform will be subject to a wallet signature (web3modal / metamask) 

The POC is using the smart contracts to grant access to the administration users by verifying the claim on their ONCHAINID, but this system can be used in the same way to validate any required claim pattern to access any application or service. 
