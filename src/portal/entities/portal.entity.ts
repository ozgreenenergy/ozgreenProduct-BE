import { Column ,  PrimaryGeneratedColumn } from 'typeorm';

export class Portal {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    portal_name: string;

    @Column()
    logo: string;

    @Column()
    timezone: string;

    @Column()
    createdAt: Date;
}