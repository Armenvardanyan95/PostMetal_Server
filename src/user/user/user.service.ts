import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../entities/user.entity';
import { UserDto } from '../../infrastructure/dto';

@Injectable()
export class UserService extends TypeOrmCrudService<UserDto> {
    constructor(@InjectRepository(User) repo) {
        super(repo);
    }
}
