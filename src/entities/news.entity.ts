import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Album } from './album.entity';
import { Artist } from './artist.entity';

@Entity()
export class News {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    headline: string;

    @Column()
    image: string;

    @Column()
    text: string;

    @Column()
    tags: string;

    @ManyToMany(() => Album, album => album.artist)
    @JoinTable()
    albums: Album[];

    @ManyToMany(() => Artist, artist => artist.news)
    artists: Artist[];
}
