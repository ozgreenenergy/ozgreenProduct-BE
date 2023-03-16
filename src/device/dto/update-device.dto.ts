import { PartialType } from '@nestjs/swagger';
import { CreateDeviceDto } from './create-device.dto';

export class UpdateDeviceDto extends PartialType(CreateDeviceDto) {
    readonly name: string;
    readonly imei_no: string;
    readonly productModelId: string;
}
