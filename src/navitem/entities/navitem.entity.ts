import { Column ,  PrimaryGeneratedColumn } from 'typeorm';

export class Navitem {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    parentMenuId: string;
   
    @Column()
    createdAt: Date;
}
