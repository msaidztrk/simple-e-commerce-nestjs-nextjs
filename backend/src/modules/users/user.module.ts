import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserPermission } from './entities/user-permission.entity';
import { UserPermissionRepository } from './repositories/user-permission.repository';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';
import { RoleController } from './controllers/role.controller';
import { UserPermissionController } from './controllers/user-permission.controller';
import { UserRepository } from './repositories/user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserPermission, UserPermissionRepository])],
  providers: [UserService, UserRepository, UserPermissionRepository],
  controllers: [UserController, RoleController, UserPermissionController],
  exports: [UserService],
})
export class UserModule {}