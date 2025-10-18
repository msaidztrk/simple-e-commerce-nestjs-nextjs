import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { Role } from '../role.enum';
import { UserRepository } from '../repositories/user.repository';
import { UserPermissionRepository } from '../repositories/user-permission.repository';
import { UserPermission } from '../entities/user-permission.entity';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly userPermissionRepository: UserPermissionRepository,
  ) {}

  async createUser(email: string, password: string, firstName: string, lastName: string, role: Role = Role.USER, is_active: boolean = true): Promise<User> {
    const user = this.userRepository.create({
      email,
      password,
      firstName,
      lastName,
      role,
      is_active,
    });
    return this.userRepository.save(user);
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.userRepository.findOne({ where: { email } });
  }

  async findById(id: number): Promise<User | null> {
    return this.userRepository.findOne({ where: { id } });
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async updateUser(id: number, updateData: Partial<User>): Promise<User | null> {
    await this.userRepository.update(id, updateData);
    return this.findById(id);
  }

  async deleteUser(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }

  async updateUserStatus(id: number, is_active: boolean): Promise<User | null> {
    await this.userRepository.update(id, { is_active });
    return this.findById(id);
  }

  async updateUserPermission(userId: number, permissionId: string, newValue: boolean): Promise<User | null> {
    const user = await this.findById(userId);
    if (!user) return null;
    let userPermission = await this.userPermissionRepository.findOne({ where: { user: { id: userId }, permissionId } });
    if (userPermission) {
      userPermission.value = newValue;
      await this.userPermissionRepository.save(userPermission);
    } else {
      userPermission = this.userPermissionRepository.create({ user, permissionId, value: newValue });
      await this.userPermissionRepository.save(userPermission);
    }
    return this.findById(userId);
  }
}
