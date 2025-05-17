import type { User } from './user';

export interface ApiRepUser {
  $id: string;
  $values: User[];
}