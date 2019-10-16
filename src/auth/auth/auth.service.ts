import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcrypt';

import { UserService } from '../../user/user/user.service';
import { User } from '../../entities/user.entity';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
    ) {}

    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.userService.findOne({where: {email}});
        if (user && compareSync(password, user.password)) {
            const {password, ...result} = user;
            return result;
        }
        return null;
    }

    async login(user: User) {
        const payload = { id: user.id, email: user.email, fullName: user.fullName };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
