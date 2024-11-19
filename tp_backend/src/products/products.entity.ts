import { Entity,PrimaryGeneratedColumn,Column, Int32 } from "typeorm";

@Entity('products')

export class Product {
    @PrimaryGeneratedColumn('increment')    
    id: number;
    
    @Column({type:'varchar',nullable:false, length:100}) 
    name: string;
    
    @Column({type:'decimal',nullable:false})
    price: number;

    @Column({type:'integer',nullable:false,default:0})
    quantity: Int32;

    @Column({type:'varchar',nullable:true})
    provider: string;
}