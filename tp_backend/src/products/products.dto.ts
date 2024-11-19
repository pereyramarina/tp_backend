import { IsNumber, IsString } from "class-validator";

export class ProductDto{

    id: number;

    @IsString()
    name: string;

    @IsNumber()
    price: number;

    @IsNumber()
    quantity: number;

    @IsString()
    provider:string;

}