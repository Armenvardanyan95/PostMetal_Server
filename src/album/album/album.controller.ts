import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';

import { AlbumService } from './album.service';
import { AlbumDto } from '../../infrastructure/dto';

@Controller('album')
@Crud({
    model: {
        type: AlbumDto,
    },
    query: {
        join: {
            artist: {
                persist: ['title'],
                allow: []
            },
        },
    },
})
export class AlbumController {
    constructor(public readonly service: AlbumService) {}
}
