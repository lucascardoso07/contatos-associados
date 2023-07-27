import { randomUUID } from 'crypto';

export class User {
  readonly id: string;
  name: string;
  email: string;
  password: string;
  telefone: string;
  createdAt: Date;

  constructor() {
    this.id = randomUUID();
  }
}