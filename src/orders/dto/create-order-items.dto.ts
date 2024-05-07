import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateOrderItemsDto {
  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;
}
