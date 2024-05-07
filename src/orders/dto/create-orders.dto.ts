import {
  IsNotEmpty,
  IsDateString,
  IsNumber,
  IsString,
  ArrayNotEmpty,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateOrderItemsDto } from 'src/orders/dto/create-order-items.dto';

export class CreateOrdersDto {
  @IsNotEmpty()
  @IsNumber()
  orderNumber: number;

  @IsNotEmpty()
  @IsDateString()
  deliveryDate: string;

  @IsNotEmpty()
  @IsNumber()
  clientId: number;

  @IsNotEmpty()
  @IsString()
  deliveryAddress: string;

  @IsNotEmpty()
  @IsDateString()
  creationDate: Date;

  @IsNotEmpty()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => CreateOrderItemsDto)
  items: CreateOrderItemsDto[];
}
