import { Container } from './container';
import { RolesService } from '../services/roles';
import { Role } from '../domain/role';

export const buildDemoContainer: () => Container = () => {
  return {
    roleService: new class implements RolesService {
      async retrieveRoleForAddress(address: string): Promise<Role[]> {
        if(address.substring(0,5).toLocaleLowerCase() === '0x366') {
          return [
            {
              type: 'INDIVIDUAL',
              registerNumber: '1990010100101',
              name: 'John Doe'
            },
          ]
        } else {
          return [
            {
              type: 'INDIVIDUAL',
              registerNumber: '1990010100202',
              name: 'Natasha Albert'
            },
            {
              type: 'ISSUER',
              name: 'Issuer 1',
              issuerId: 'abcd'
            }
          ]
        }
      }
    }()
  }
}
