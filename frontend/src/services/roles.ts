import { Role } from '../domain/role';

export interface RolesService {
  retrieveRoleForAddress: (address: string) => Promise<Role[]>;
}
