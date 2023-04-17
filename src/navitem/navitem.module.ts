import { Module } from '@nestjs/common';
import { NavitemService } from './navitem.service';
import { NavitemController } from './navitem.controller';
import { MongooseModule }  from '@nestjs/mongoose'; 
import { Navitem , NavitemSchema } from './schema/navitem.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Navitem.name, schema: NavitemSchema }])],
  controllers: [NavitemController],
  providers: [NavitemService]
})
export class NavitemModule {}
