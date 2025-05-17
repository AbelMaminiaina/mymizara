import type { User } from './user';
import type { role } from './role';

export interface userRole {
  $id: string;
  userId: number;
  user: User;
  roleId: number;
  role: role;
}