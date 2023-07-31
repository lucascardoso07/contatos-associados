import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { ContactRepository } from './repositories/contact.repository';

@Injectable()
export class ContactService {
  constructor(private contactRepository: ContactRepository) {}
  async create(data: CreateContactDto, userId: string) {
    return await this.contactRepository.create(data, userId);
  }

  async findAll() {
    return await this.contactRepository.findAll();
  }

  async findOne(id: string) {
    const findContact = await this.contactRepository.findOne(id);
    if (!findContact) {
      throw new NotFoundException('contact not found');
    }
  }

  async update(id: string, updateContactDto: UpdateContactDto) {
    const findContact = await this.contactRepository.findOne(id);
    if (!findContact) {
      throw new NotFoundException('contact not found');
    }
    return this.contactRepository.update(id, updateContactDto);
  }

  async remove(id: string) {
    const findContact = await this.contactRepository.findOne(id);
    if (!findContact) {
      throw new NotFoundException('contact not found');
    }
    return this.contactRepository.delete(id);
  }
}
