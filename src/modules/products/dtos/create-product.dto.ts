import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateProductDTO{
  @IsString()
  name: string;

  @IsString()
  price: string;

  @IsOptional()
  @IsString()
  description?: string;
}