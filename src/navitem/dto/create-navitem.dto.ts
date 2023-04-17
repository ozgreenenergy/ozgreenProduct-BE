import { IsString, MinLength } from 'class-validator';

export class CreateNavitemDto {
    @IsString()
    @MinLength(3)
    name: string;
}
