import { Column ,  PrimaryGeneratedColumn } from 'typeorm';

export class RawDatum {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    imei_no: string;

    @Column()
    productModelId: string;
   
    @Column()
    createdAt: Date;
}

