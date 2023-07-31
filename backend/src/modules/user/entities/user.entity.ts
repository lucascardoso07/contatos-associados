import { randomUUID } from 'crypto';
import { Exclude } from 'class-transformer';
import { Contact } from 'src/modules/contact/entities/contact.entity';

export class User {
  readonly id: string;
  name: string;
  email: string;

  @Exclude()
  password: string;

  telefone: string;
  createdAt: Date;

  constructor() {
    this.id = randomUUID();
  }
}
