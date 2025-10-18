import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, Unique } from 'typeorm';
import { User } from './user.entity';

@Entity('user_permissions')
@Unique(['user', 'permissionId'])
export class UserPermission {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, user => user.userPermissions, { onDelete: 'CASCADE' })
  user: User;

  @Column()
  permissionId: string;

  @Column({ type: 'boolean' })
  value: boolean;
}
