import { Module } from '@nestjs/common';
import { PortalService } from './portal.service';
import { PortalController } from './portal.controller';
import { MongooseModule }  from '@nestjs/mongoose'; 
import { Portal , PortalSchema } from './schema/portal.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Portal.name, schema: PortalSchema, collection:'aPortal' }])],
  controllers: [PortalController],
  providers: [PortalService]
})
export class PortalModule {}
