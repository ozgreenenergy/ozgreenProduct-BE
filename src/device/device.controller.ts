import { Controller , Get , Post , Body , Put , Param , Delete , UseGuards } from '@nestjs/common';
import { DeviceService } from './device.service';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth,getProductParam,deleteProductParam,getProductBody,getUserOperation,productTags, loginTags } from '../common/swagger';

@Controller('device')
export class DeviceController {
  constructor(private readonly deviceService: DeviceService) {}

  @UseGuards(AuthGuard('jwt'))
  @productTags()
  @Post('')
  @getProductBody()
  @ApiBearerAuth('token')
  create(@Body() createDeviceDto: CreateDeviceDto) {
    return this.deviceService.create(createDeviceDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @productTags()
  @ApiBearerAuth('token')
  @Get()
  findAll() {
    return this.deviceService.findAll();
  }

  @UseGuards(AuthGuard('jwt'))
  @productTags()
  @getProductParam()
  @ApiBearerAuth('token')
  @Get(':id')
  findOne(@Param() params) {
    return this.deviceService.findOne(params.id);
  }

  @UseGuards(AuthGuard('jwt'))
  @productTags()
  @Put(':id')
  @getProductBody()
  @ApiBearerAuth('token')
  update(@Param() params, @Body() updateDeviceDto: UpdateDeviceDto) {
    return this.deviceService.update(params.id, updateDeviceDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  @productTags()
  @deleteProductParam()
  @ApiBearerAuth('token')
  remove(@Param() params) {
    console.log(params, "params");
    return this.deviceService.remove(params.id);
  }
}
