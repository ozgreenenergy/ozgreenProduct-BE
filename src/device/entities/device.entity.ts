import { Column ,  PrimaryGeneratedColumn } from 'typeorm';

export class Device {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    imei_no: string;

    @Column()
    productModelId: string;

    @Column()
    created_at: Date;
}
