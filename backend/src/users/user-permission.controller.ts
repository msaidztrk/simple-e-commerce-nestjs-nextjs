import { Body, Controller, Patch } from '@nestjs/common';
import { UserService } from './user.service';

interface UpdateUserPermissionDto {
  user_id: number;
  permission_id: string;
  new_value: boolean;
}

@Controller('user-permissions')
export class UserPermissionController {
  constructor(private readonly userService: UserService) {}

  @Patch('update')
  async updateUserPermission(@Body() body: UpdateUserPermissionDto) {
    const user = await this.userService.updateUserPermission(
      body.user_id,
      body.permission_id,
      body.new_value
    );
    if (!user) {
      return { success: false, message: 'User not found' };
    }
  return { success: true, permissions: user.userPermissions };
  }
}
