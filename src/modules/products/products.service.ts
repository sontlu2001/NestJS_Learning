import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/entities/Product';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ){}

  findAll(){
    return this.productRepository.find();
  }

  async findOneById(id: number){
    const product = await this.productRepository.findOneBy({id})
    if(!product){
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    } 
    return product
  }

  create(productData: Partial<Product>){
   const newProduct = this.productRepository.create(productData);
   newProduct.createdAt = new Date();
   newProduct.updatedAt = new Date();
   return this.productRepository.save(newProduct);
  }

  async update(id: number, productData: Partial<Product>){
    productData.updatedAt = new Date();
    await this.productRepository.update(id, productData);
    return this.productRepository.findOneBy({id});
  }

  async delete(id: number){
    const product = await this.productRepository.findOneBy({id})
    if(!product){
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    } 
    await this.productRepository.delete(id);
  }
}
 