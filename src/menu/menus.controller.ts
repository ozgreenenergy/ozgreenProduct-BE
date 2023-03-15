import { Controller, Get, Post, Put, Delete, Body, UseGuards, Param } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { MenuService } from './menus.service';
import { Menu } from './menus.model';

@Controller('menu')
export class MenuController {
  constructor(private menuService: MenuService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async findAll(): Promise<Menu[]> {
    return this.menuService.findAll();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Menu> {
    return this.menuService.findOne(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(@Body() menu: Menu): Promise<Menu> {
    return this.menuService.create(menu);
  }

// async create(@Body() createMenuItemDto: Menu): Promise<Menu> {
//     const menuItem = await this.menuService.create(createMenuItemDto);
//     if (menuItem.submenus) {
//       for (const submenu of menuItem.submenus) {
//            let menuId = menuItem['id'];
//         //    console.log(menuItem['id'],"test");
//         await this.menuService.createSubmenu(menuId, submenu);
//       }
//     }
//     return menuItem;
//   }

  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  async update(@Param('id') id: string, @Body() menu: Menu): Promise<Menu> {
    return this.menuService.update(id, menu);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Menu> {
    return this.menuService.delete(id);
  }
}
