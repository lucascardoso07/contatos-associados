/* eslint-disable prettier/prettier */
import { PrismaService } from 'src/database/prisma.service';
import { Injectable } from '@nestjs/common';

import { CreateUserDto } from '../../dto/create-user.dto';
import { UpdateUserDto } from '../../dto/update-user.dto';
import { User } from '../../entities/user.entity';
import { UserRepository } from '../user.repository';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class UserPrismaRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateUserDto): Promise<User> {
    const user = new User();
    Object.assign(user, {
      ...data,
    });
    const newUser = await this.prisma.user.create({
      data: { ...user },
    });
    return plainToInstance(User, newUser);
  }
  async findAll(): Promise<User[]> {
    const users = await this.prisma.user.findMany({
      include: {
        contacts: true,
      },
    });
    return plainToInstance(User, users);
  }
  async findOne(id: string): Promise<User> {
    const user = await this.prisma.user.findFirst({
      where: { id },
      include: {
        contacts: true,
      },
    });
    return plainToInstance(User, user);
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.prisma.user.findFirst({
      where: { email },
    });
    return user;
  }

  async update(id: string, data: UpdateUserDto): Promise<User> {
    const user = await this.prisma.user.update({
      where: { id },
      data: { ...data },
    });

    return plainToInstance(User, user);
  }

  async delete(id: string): Promise<void> {
    await this.prisma.contact.delete({
      where: { id },
    });
  }
}
