import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MenuController } from './menus.controller';
import { MenuService } from './menus.service';
import { MenuSchema } from './menus.model';
import { SubmenuSchema } from './submenus.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Menu', schema: MenuSchema },
      { name: 'Submenu', schema: SubmenuSchema },
    ]),
  ],
  controllers: [MenuController],
  providers: [MenuService],
})
export class MenuModule {}
