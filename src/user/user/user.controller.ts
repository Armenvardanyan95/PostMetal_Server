import { Controller, HttpException, HttpStatus, Post, Body } from '@nestjs/common';
import { Crud, CrudController, Override, ParsedRequest, ParsedBody, CrudRequest } from '@nestjsx/crud';

import { UserService } from './user.service';
import { UserDto } from '../../infrastructure/dto';

@Crud({
    model: {
        type: UserDto,
    },
    query: {
        exclude: ['password'],
    },
})
@Controller('user')
export class UserController implements CrudController<UserDto> {
    constructor(
        public readonly service: UserService,
    ) {}

    get base(): CrudController<UserDto> {
        return this;
    }

    @Override()
    async createOne(
        @ParsedRequest() req: CrudRequest,
        @ParsedBody() userDto: UserDto,
    ) {
        if (userDto.password !== userDto.confirmPassword) {
            throw new HttpException('Passwords don\'t match', HttpStatus.BAD_REQUEST);
        }
        return this.base.createOneBase(req, userDto);
    }

}
