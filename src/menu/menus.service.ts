import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Menu } from './menus.model';
import { Submenu } from './submenus.model';

@Injectable()
export class MenuService {
  constructor(
    @InjectModel('Menu') private readonly menuModel: Model<Menu>,
    @InjectModel('Submenu') private readonly submenuModel: Model<Submenu>,

    // @InjectModel(Menu.name) private menuItemModel: Model<MenuItemDocument>,
  ) {}

  async findAll(): Promise<Menu[]> {
    return this.menuModel.find().exec();
  }

  async findOne(id: string): Promise<Menu> {
    return this.menuModel.findById(id).exec();
  }

  async create(menu: Menu): Promise<Menu> {
    const createdMenu = new this.menuModel(menu);
    return createdMenu.save();
  }

  async createSubmenu(id: any, submenuItem: Submenu): Promise<Menu> {
    const menuItem = await this.menuModel.findById(id).exec();
    menuItem.submenus.push(submenuItem);
    return menuItem.save();
  }

  async update(id: string, menu: Menu): Promise<Menu> {
    return this.menuModel.findByIdAndUpdate(id, menu, { new: true }).exec();
  }

  async delete(id: string): Promise<Menu> {
    return this.menuModel.findByIdAndRemove(id).exec();
  }
}
