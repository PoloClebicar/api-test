import { Injectable } from '@nestjs/common';
import { User, UsersRepo } from './users.repo';

@Injectable()
export class UsersLocalRepo implements UsersRepo {
  private readonly users = [
    {
      id: 1,
      email: 'john',
      password: 'qklwjeqiwue0192831p3uqaif-123r89-120f-12jiefg', // changeme
    },
    {
      id: 2,
      email: 'maria',
      password: 'guess',
    },
  ];

  async getByEmailWithPassword(email: string): Promise<User | null> {
    return this.users.find(user => user.email === email) || null;
  }
}