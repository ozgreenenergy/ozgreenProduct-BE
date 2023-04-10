import { Column ,  PrimaryGeneratedColumn } from 'typeorm';

export class Sensor {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    kind: string;

    @Column()
    unitId: string;

    @Column()
    decimalPlaces: number;

    @Column()
    createdAt: Date;
}