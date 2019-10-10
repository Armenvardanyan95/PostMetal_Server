import { NestFactory } from '@nestjs/core';
import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { UserModule } from './user/user.module';
import { ArtistModule } from './artist/artist.module';
import { AlbumModule } from './album/album.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({origin: ['http://localhost:4200']});
  renderSwaggerDocumentation(app);

  await app.listen(3000);
}
bootstrap();

function renderSwaggerDocumentation(app: INestApplication) {

  // user API
  const userOptions = new DocumentBuilder()
    .setTitle('Users')
    .setDescription('The users API description')
    .setVersion('1.0')
    .addTag('users')
    .build();

  const userDoc = SwaggerModule.createDocument(app, userOptions, {
    include: [UserModule],
  });

  // artist API
  const artistOptions = new DocumentBuilder()
    .setTitle('Artists')
    .setDescription('The artists API description')
    .setVersion('1.0')
    .addTag('artists')
    .build();

  const artistDoc = SwaggerModule.createDocument(app, artistOptions, {
    include: [ArtistModule],
  });

  // album API
  const albumOptions = new DocumentBuilder()
    .setTitle('Albums')
    .setDescription('The albums API description')
    .setVersion('1.0')
    .addTag('albums')
    .build();

  const albumDoc = SwaggerModule.createDocument(app, albumOptions, {
    include: [AlbumModule],
  });
  // run docs
  SwaggerModule.setup('api/user', app, userDoc);
  SwaggerModule.setup('api/artist', app, artistDoc);
  SwaggerModule.setup('api/album', app, albumDoc);
}
