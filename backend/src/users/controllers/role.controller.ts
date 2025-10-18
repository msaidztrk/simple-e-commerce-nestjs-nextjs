import { Body, Controller, Param, Patch } from '@nestjs/common';
import { Role } from '../role.enum';
import { Permission } from '../permissions.enum';
import { RolePermissions } from '../role-permissions';

interface UpdatePermissionsDto {
  permissions: Permission[];
}

@Controller('roles')
export class RoleController {
  @Patch(':role/permissions')
  updatePermissions(
    @Param('role') role: Role,
    @Body() updatePermissionsDto: UpdatePermissionsDto,
  ): { success: boolean; permissions: Permission[] } {
    if (!Object.values(Role).includes(role)) {
      return { success: false, permissions: [] };
    }
    RolePermissions[role] = updatePermissionsDto.permissions;
    return { success: true, permissions: RolePermissions[role] };
  }
}
