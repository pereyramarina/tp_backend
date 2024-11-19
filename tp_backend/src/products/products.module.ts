import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './products.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  exports: [ProductsService],  // Make the service available to other modules
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule {}
