import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Album } from '../../entities/album.entity';

@Injectable()
export class AlbumService extends TypeOrmCrudService<Album> {
    constructor(@InjectRepository(Album) repo) {
        super(repo);
    }
}
