import { Column ,  PrimaryGeneratedColumn } from 'typeorm';

export class Portal {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    id_name: string;

    @Column()
    logo: string;

    @Column()
    timezone: string;

    @Column()
    createdAt: Date;
}