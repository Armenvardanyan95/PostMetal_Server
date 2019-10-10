import { Entity, PrimaryGeneratedColumn,
         Column, OneToMany, BeforeInsert } from 'typeorm';
import { hashSync } from 'bcrypt';

import { Review } from './review.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    email: string;

    @Column()
    password: string;

    @Column()
    fullName: string;

    @Column()
    isAdmin: boolean;

    @OneToMany(() => Review, review => review.author)
    reviews: Review[];

    @BeforeInsert()
    hashPassword() {
        this.password = hashSync(this.password, 10);
    }
}
