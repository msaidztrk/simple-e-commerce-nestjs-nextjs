import { Role } from './role.enum';
import { Permission } from './permissions.enum';

export const RolePermissions: Record<Role, Permission[]> = {
  [Role.ADMIN]: [
    Permission.LOGIN,
    Permission.USER_ADD,
    Permission.USER_UPDATE,
    Permission.USER_DELETE,
    Permission.PRODUCT_ADD,
    Permission.PRODUCT_UPDATE,
    Permission.PRODUCT_DELETE,
  ],
  [Role.CUSTOMER]: [
    Permission.PRODUCT_ADD,
    Permission.PRODUCT_UPDATE,
    Permission.PRODUCT_DELETE,
  ],
  [Role.SUPER_ADMIN]: [
    Permission.LOGIN,
    Permission.USER_ADD,
    Permission.USER_UPDATE,
    Permission.USER_DELETE,
    Permission.PRODUCT_ADD,
    Permission.PRODUCT_UPDATE,
    Permission.PRODUCT_DELETE,
  ],
  [Role.USER]: [],
};