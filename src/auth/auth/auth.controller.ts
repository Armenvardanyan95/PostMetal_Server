import { Controller, Post, Body } from '@nestjs/common';
import { LoginDto } from '../../infrastructure/dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(
        private readonly authService: AuthService,
    ) {}

    @Post('login')
    async login(@Body() loginDto: LoginDto) {
            const user = await this.authService.validateUser(loginDto.email, loginDto.password);
            return this.authService.login(user);
    }
}
