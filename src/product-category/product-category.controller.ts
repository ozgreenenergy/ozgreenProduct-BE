import { Body, Controller, Request, Post, Get, Param,UseGuards } from '@nestjs/common';
import { ProductCategoryService } from './product-category.service';
import { ProductCategory } from './product-category.model';
import { AuthGuard } from '@nestjs/passport';

@Controller('product-category')
export class ProductCategoryController {
    constructor(private readonly productsCatService: ProductCategoryService) { }

    @UseGuards(AuthGuard('jwt'))
    @Post('add')
    async createProductCat(
        @Body('name') name: string,
        @Body('modelId') modelId: string,
        @Body('description') description: string,
        @Body('created_at') created_at: Date,
    ): Promise<ProductCategory> {
        const result = await this.productsCatService.createProductCategory(
            name,
            modelId,
            description,
            created_at,
        );
        return result;
    }
}