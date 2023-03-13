import { Body, Controller, Request, Post, Get, Param,UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CustomersService } from './customers.service';
import { Customer } from './customers.model';


@Controller('customer')
export class CustomersController {
    constructor(private readonly customersService: CustomersService) { }

    @UseGuards(AuthGuard('jwt'))
    @Post('add')
    async createCustomer(
        @Body('name') name: string,
        @Body('created_at') created_at: Date,
    ): Promise<Customer> {
        const result = await this.customersService.createCustomer(
            name,
            created_at,
        );
        return result;
    }
}