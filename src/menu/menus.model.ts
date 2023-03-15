import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Submenu, SubmenuSchema } from './submenus.model';

@Schema()
export class Menu {
  @Prop({ required: true })
  title: string;

  @Prop({ type: [SubmenuSchema], default: [] })
  submenus: Submenu[];
}

export type MenuDocument = Menu & Document;
export const MenuSchema = SchemaFactory.createForClass(Menu);
