import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { Artist } from './artist.entity';
import { News } from './news.entity';

@Entity()
export class Album {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    cover: string;

    @Column()
    releaseDate: Date;

    @Column()
    wiki: string;

    @Column()
    tags: string;

    @ManyToOne(() => Artist)
    artist: Artist;

    @ManyToMany(() => News, news => news.albums)
    @JoinTable()
    news: News[];
}
