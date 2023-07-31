import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { ContactModule } from './modules/contact/contact.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [UserModule, ContactModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
