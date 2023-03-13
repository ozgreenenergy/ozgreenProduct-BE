import { Body, Controller, Request, Post, Get, Param,UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './products.model';
import { AuthGuard } from '@nestjs/passport';


@Controller('product')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) { }

    @UseGuards(AuthGuard('jwt'))
    @Post('add')
    async createProduct(
        @Body('productModelRef') productModelRef: string,
        @Body('product') product: string,
        @Body('aCustomerRef') aCustomerRef: string,
        @Body('created_at') created_at: Date,
    ): Promise<Product> {
        const result = await this.productsService.createProduct(
            productModelRef,
            product,
            aCustomerRef,
            created_at,
        );
        return result;
    }
}