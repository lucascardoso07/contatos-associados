import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { ContactModule } from './modules/contact/contact.module';

@Module({
  imports: [UserModule, ContactModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
