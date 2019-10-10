import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { Album } from './album.entity';
import { News } from './news.entity';

@Entity()
export class Artist {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    title: string;

    @Column()
    image: string;

    @Column()
    wiki: string;

    @Column()
    tags: string;

    @OneToMany(() => Album, album => album.artist)
    albums: Album[];

    @ManyToMany(() => News, news => news.artists)
    @JoinTable()
    news: News[];
}
