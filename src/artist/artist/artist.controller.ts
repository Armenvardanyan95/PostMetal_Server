import { Controller } from '@nestjs/common';
import { Crud, Override, CrudController, BaseRouteName } from '@nestjsx/crud';
import { ArtistDto } from '../../infrastructure/dto';
import { ArtistService } from './artist.service';

@Controller('artist')
@Crud({
    model: {
        type: ArtistDto,
    },
})
export class ArtistController implements CrudController<ArtistDto> {
    constructor(public readonly service: ArtistService) {}
}
