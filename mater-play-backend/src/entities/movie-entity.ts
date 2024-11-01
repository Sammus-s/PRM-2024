import { text } from "stream/consumers";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./category-entity";

@Entity()
export class Movie {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({nullable: false})
    title: string;

    @Column({type: 'text', nullable: false})
    description: string;

    @Column({name:'age-rating', length:2, nullable:false})
    ageRaring: string;

    @Column({nullable: false})
    poster: string;

    @ManyToMany(() => Category, {eager: true})
    @JoinTable({
        name: 'movie_category'
    })

    categories: Category[]
}