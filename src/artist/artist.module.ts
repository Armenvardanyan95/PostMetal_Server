import { Module } from '@nestjs/common';
import { ArtistService } from './artist/artist.service';
import { ArtistController } from './artist/artist.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Artist } from '../entities/artist.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Artist])],
  providers: [ArtistService],
  controllers: [ArtistController],
})
export class ArtistModule {}
