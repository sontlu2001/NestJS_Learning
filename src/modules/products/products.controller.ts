import { Body, Controller, Delete, Get, Param, Patch, Post, ValidationPipe } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDTO } from './dtos/create-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Get()
  findAll(){
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number){
    return this.productsService.findOneById(id);
  }

  @Post()
  create(@Body(new ValidationPipe) productData: CreateProductDTO){
    return this.productsService.create(productData);
  }

  @Patch(':id')
  update(
    @Body() productData: any,
    @Param('id') id: number
  ){
    return this.productsService.update(id, productData);
  }

  @Delete(':id')
  delete(
    @Param('id') id: number
  ){
    return this.productsService.delete(id);
  }
}
