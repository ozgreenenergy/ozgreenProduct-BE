import { Body, Controller, Request, Post, Get, Param,UseGuards, Put, Delete } from '@nestjs/common';
import { ProductCategoryService } from './product-category.service';
import { ProductCategory } from './product-category.model';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth,getProductModelParam,deleteProductModelParam,getProductModelBody,productModelTags} from '../common/swagger';

@Controller('product-category')
export class ProductCategoryController {
    constructor(private readonly productsCatService: ProductCategoryService) { }

    @UseGuards(AuthGuard('jwt'))
    @productModelTags()
    @Post('')
    @getProductModelBody()
    @ApiBearerAuth('token')
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
    @productModelTags()
    @ApiBearerAuth('token')
    @Get()
    async findAll(): Promise<ProductCategory[]> {
        return this.productsCatService.findAll();
    }

    @UseGuards(AuthGuard('jwt'))
    @productModelTags()
    @getProductModelParam()
    @ApiBearerAuth('token')
    @Get(':id')
    async findOne(@Param() params) {
        return await this.productsCatService.findOne(params.id);
    }

    @UseGuards(AuthGuard('jwt'))
    @productModelTags()
    @Put(':id')
    @getProductModelBody()
    @Put(':id')
    async update(@Param('id') id: string, @Body() productCategory: ProductCategory): Promise<ProductCategory> {
        return this.productsCatService.update(id, productCategory);
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    @productModelTags()
    @deleteProductModelParam()
    @ApiBearerAuth('token')
    @Delete(':id')
    async delete(@Param('id') id: string): Promise<ProductCategory> {
        return this.productsCatService.delete(id);
    }
}
