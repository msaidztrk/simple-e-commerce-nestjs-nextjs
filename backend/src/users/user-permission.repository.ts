import { EntityRepository, Repository } from 'typeorm';
import { UserPermission } from './user-permission.entity';

@EntityRepository(UserPermission)
export class UserPermissionRepository extends Repository<UserPermission> {}
