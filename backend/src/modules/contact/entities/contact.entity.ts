import { randomUUID } from 'crypto';

export class Contact {
  readonly id: string;
  name: string;
  email: string;
  telefone: string;
  createdAt: Date;
  userId: string;

  constructor() {
    this.id = randomUUID();
  }
}
