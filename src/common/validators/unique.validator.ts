import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
import { Injectable } from '@nestjs/common';
import { DeviceService } from 'src/device/device.service';

@Injectable()
@ValidatorConstraint({ name: 'unique', async: true })
export class UniqueValidator implements ValidatorConstraintInterface {
  constructor(private readonly deviceService: DeviceService) {}

  async validate(userId: number, args: ValidationArguments): Promise<boolean> {
    const record = await this.deviceService.findOne(userId);
    return !record;
  }

  defaultMessage(args: ValidationArguments): string {
    return `${args.property} already exists`;
  }
}
