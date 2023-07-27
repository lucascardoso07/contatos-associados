import { Module } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactController } from './contact.controller';
import { PrismaService } from 'src/database/prisma.service';
import { ContactRepository } from './repositories/contact.repository';
import { ContactPrismaRepository } from './repositories/prisma/contacts.prisma.repository';

@Module({
  controllers: [ContactController],
  providers: [
    ContactService,
    PrismaService,
    {
      provide: ContactRepository,
      useClass: ContactPrismaRepository,
    },
  ],
})
export class ContactModule {}
