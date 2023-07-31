import { Controller, Body, UseGuards, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { loginDto } from './dto/create-auth.dto';

import { ApiTags } from '@nestjs/swagger';

@ApiTags('Login')
@Controller('login')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async login(@Body() user: loginDto) {
    return this.authService.login(user.email);
  }
}
