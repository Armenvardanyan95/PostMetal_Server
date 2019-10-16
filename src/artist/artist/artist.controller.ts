import { Controller, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Crud, CrudController, Override, ParsedRequest, CrudRequest, ParsedBody, CreateManyDto } from '@nestjsx/crud';
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

    get base(): CrudController<ArtistDto> {
        return this;
    }

    @Override()
    @UseGuards(AuthGuard())
    createOne(
        @ParsedRequest() req: CrudRequest,
        @ParsedBody() artistDto: ArtistDto,
    ) {
        return this.base.createOneBase(req, artistDto);
    }

    @Override()
    @UseGuards(AuthGuard())
    createMany(
        @ParsedRequest() req: CrudRequest,
        @ParsedBody() artistDto: CreateManyDto<ArtistDto>,
    ) {
        return this.base.createManyBase(req, artistDto);
    }

    @Override()
    @UseGuards(AuthGuard())
    updateOne(
        @ParsedRequest() req: CrudRequest,
        @ParsedBody() artistDto: ArtistDto,
    ) {
        return this.base.updateOneBase(req, artistDto);
    }

    @Override()
    @UseGuards(AuthGuard())
    replaceOne(
        @ParsedRequest() req: CrudRequest,
        @ParsedBody() artistDto: ArtistDto,
    ) {
        return this.base.replaceOneBase(req, artistDto);
    }

    @Override()
    @UseGuards(AuthGuard())
    deleteOne(@ParsedRequest() req: CrudRequest) {
        return this.base.deleteOneBase(req);
    }
}
