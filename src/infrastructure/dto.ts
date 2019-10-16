import { ApiModelProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail } from 'class-validator';

export class UserDto {
    @ApiModelProperty()
    fullName: string;

    @ApiModelProperty()
    isAdmin: boolean;

    @ApiModelProperty()
    @IsEmail()
    email: string;

    @ApiModelProperty()
    password: string;

    @ApiModelProperty()
    confirmPassword: string;
}

export class ArtistDto {

    @ApiModelProperty()
    title: string;

    @ApiModelProperty()
    image: string;

    @ApiModelProperty()
    wiki: string;

    @ApiModelProperty()
    tags: string;
}

export class AlbumDto {

    @ApiModelProperty()
    title: string;

    @ApiModelProperty()
    cover: string;

    @ApiModelProperty()
    releaseDate: string;

    @ApiModelProperty()
    wiki: string;

    @ApiModelProperty()
    tags: string;

    @ApiModelProperty()
    artist: number;
}

export class LoginDto {
    @ApiModelProperty()
    email: string;

    @ApiModelProperty()
    password: string;
}
