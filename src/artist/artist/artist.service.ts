import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { Artist } from '../../entities/artist.entity';

@Injectable()
export class ArtistService extends TypeOrmCrudService<Artist> {
    constructor(@InjectRepository(Artist) repo) {
        super(repo);
    }
}
