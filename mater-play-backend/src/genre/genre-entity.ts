import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('genre')
export class Genre {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({nullable: false })
  name: string;
}
