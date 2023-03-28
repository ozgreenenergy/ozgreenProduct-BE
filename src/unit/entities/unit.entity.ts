import { Column ,  PrimaryGeneratedColumn } from 'typeorm';

export class Unit {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    createdAt: Date;
}