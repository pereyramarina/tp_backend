import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { Product } from './products.entity';
import {ProductDto} from './products.dto';

import { HttpException } from '@nestjs/common';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product) private readonly repo: Repository<ProductDto>,
    )    
    {}

    async create (product: ProductDto){
        try{    
            const result = await this.repo.save(product);
            return result
        }
        catch (err:any){
            throw new HttpException(err.message, err.status)
        }
    }

    
    async list (){
        try{    
            const result = await this.repo.find()
            return result
        }
        catch (err:any){
            throw new HttpException(err.message, err.status)
        }
    }
    async findByName(name: string) {
        try {
            // Busca productos cuyo nombre comience con 'name' en la base de datos
            const result = await this.repo.find({
                where: {
                    name: Like(`%${name}%`),  // '%' es el comodín para que 'name' sea el inicio del nombre
                },
            });
            return result;
        } catch (err: any) {
            throw new HttpException(err.message, err.status || 500);
        }
    }


}
