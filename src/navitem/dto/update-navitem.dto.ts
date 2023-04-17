import { PartialType } from '@nestjs/swagger';
import { CreateNavitemDto } from './create-navitem.dto';

export class UpdateNavitemDto extends PartialType(CreateNavitemDto) {}
