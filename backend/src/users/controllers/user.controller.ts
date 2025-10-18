import { Controller, Get, Post, Body, Param, Put, Delete, Patch, BadRequestException } from '@nestjs/common';
import { UserService } from '~/users/services/user.service';
import { User } from '~/users/entities/user.entity';
import { Role } from '../role.enum';

interface UpdateUserStatusDto {
  is_active: boolean;
}

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: { email: string; password: string; firstName: string; lastName: string; role?: Role; is_active?: boolean }): Promise<User> {
    return this.userService.createUser(
      createUserDto.email,
      createUserDto.password,
      createUserDto.firstName,
      createUserDto.lastName,
      createUserDto.role,
      createUserDto.is_active,
    );
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User | null> {
    return this.userService.findById(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: Partial<User>): Promise<User | null> {
    return this.userService.updateUser(+id, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.userService.deleteUser(+id);
  }

  @Patch(':id/status')
  async updateStatus(@Param('id') id: string, @Body() dto: UpdateUserStatusDto): Promise<User | null> {
    const userId = Number(id);
    if (!Number.isInteger(userId) || userId <= 0) {
      throw new BadRequestException('Invalid user id');
    }

    return this.userService.updateUserStatus(userId, dto.is_active);
  }
}
