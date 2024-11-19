import { Body, Controller, Get, HttpStatus, Post, Query, Res } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductDto } from './products.dto';
import { Response } from 'express';

@Controller('products')
export class ProductsController {

    constructor(private readonly service:ProductsService){}
    
    @Post()
    async create(@Body() product: ProductDto, @Res() response: Response){
        const result = await this.service.create(product);
        response.status(HttpStatus.CREATED)
                .json({ok:true, result, msg:'Created successfully'})
        
    }

    @Get()
    async findAll( @Res() response: Response){
        const result = await this.service.list()
        response.status(HttpStatus.OK)
                .json({ok:true, result, msg:'Products List'})

    }

    @Get('search')
    async searchProducts(@Query('name') name: string, @Res() response: Response) {
        if (!name) {
            response.status(HttpStatus.BAD_REQUEST).json({ ok: false,result:[], msg: 'Name query parameter is required' });
            return;
        }
        const result = await this.service.findByName(name);
        response.status(HttpStatus.OK).json({ ok: true, result, msg: 'Search Results' });
    }
        
   
}
