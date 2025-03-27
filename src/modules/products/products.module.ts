import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/entities/Product';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [ProductsController],
  providers: [ProductsService, 
    {
    provide: 'newService',
    useValue: {
      name: 'newService',
      method: () => {
        return 'newService';
      },
    },
    }
],
})
export class ProductsModule {}
