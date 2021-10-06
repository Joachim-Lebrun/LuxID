export type Role = RoleIndividual | RoleCompany | RoleIssuer;

interface RoleIndividual {
  type: 'INDIVIDUAL'
  registerNumber: string;
  name: string;
}

interface RoleCompany {
  type: 'COMPANY'
  companyNumber: string;
  name: string;
}

interface RoleIssuer {
  type: 'ISSUER'
  issuerId: string;
  name: string;
}
