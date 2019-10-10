import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Album } from './album.entity';
import { User } from './user.entity';

@Entity()
export class Review {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text: string;

    @Column()
    rating: 1 | 2 | 3 | 4 | 5;

    @ManyToOne(() => User)
    author: User;

    @ManyToOne(() => Album)
    album: Album;
}
