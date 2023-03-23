import { Body, Controller, Request, Post, Get, Param,UseGuards, Put, Delete } from '@nestjs/common';
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

    @UseGuards(AuthGuard('jwt'))
    @Get()
    async findAll(): Promise<ProductCategory[]> {
        return this.productsCatService.findAll();
    }

    @UseGuards(AuthGuard('jwt'))
    @Get(':id')
    async findOne(@Param() params) {
        return await this.productsCatService.findOne(params.id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Put(':id')
    async update(@Param('id') id: string, @Body() productCategory: ProductCategory): Promise<ProductCategory> {
        return this.productsCatService.update(id, productCategory);
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    async delete(@Param('id') id: string): Promise<ProductCategory> {
        return this.productsCatService.delete(id);
    }
}
