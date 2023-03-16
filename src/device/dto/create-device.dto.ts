import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateDeviceDto {
    
    @IsString()
    @MinLength(3)
    name: string;

}
