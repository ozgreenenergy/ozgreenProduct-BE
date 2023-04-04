import { Column ,  PrimaryGeneratedColumn } from 'typeorm';

export class Unit {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    unit_symbol: string;

    @Column()
    description: string;

    @Column()
    createdAt: Date;
}