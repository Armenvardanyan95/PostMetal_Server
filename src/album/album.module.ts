import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Album } from '../entities/album.entity';
import { AlbumService } from './album/album.service';
import { AlbumController } from './album/album.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Album])],
    providers: [AlbumService],
    controllers: [AlbumController],
})
export class AlbumModule {}
