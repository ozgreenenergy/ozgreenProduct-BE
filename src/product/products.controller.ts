import { Body, Controller, Request, Post, Get, Param,UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './products.model';
import { AuthGuard } from '@nestjs/passport';
import { getproductsOperation, getProductsResponse, productTags } from '../common/swagger';


@Controller('product')
@productTags()
export class ProductsController {
    constructor(
        private readonly productsService: ProductsService) { }


    @UseGuards(AuthGuard('jwt'))
    
    @Post('add')
    @getproductsOperation()
    @getProductsResponse()
    async createProduct(
        @Body('name') name: string,
        @Body('id_serial') id_serial: string,
        @Body('description') description: string,
        @Body('aCustomerRef') aCustomerRef: string,
        @Body('productModelRef') productModelRef: string,
        @Body('created_at') created_at: Date,
    ): Promise<Product> {
        const result = await this.productsService.createProduct(
            name,
            id_serial,
            description,
            aCustomerRef,
            productModelRef,
            created_at,
        );
        return result;
    }
}