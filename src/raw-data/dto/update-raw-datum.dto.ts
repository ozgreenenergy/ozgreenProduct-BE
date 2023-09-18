import { PartialType } from '@nestjs/swagger';
import { CreateRawDatumDto } from './create-raw-datum.dto';

export class UpdateRawDatumDto extends PartialType(CreateRawDatumDto) {}
