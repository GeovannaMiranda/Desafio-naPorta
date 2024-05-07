import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Orders } from './entities/orders.entity';
import { CreateOrdersDto } from './dto/create-orders.dto';
import { UpdateOrdersDto } from './dto/update-orders.dto';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Orders)
    private ordersRepository: Repository<Orders>,
  ) {}

  async findAll(): Promise<Orders[]> {
    return await this.ordersRepository.find();
  }

  async create(dto: CreateOrdersDto) {
    const newOrder = this.ordersRepository.create(dto);
    return await this.ordersRepository.save(newOrder);
  }

  async update(id: Orders['id'], dto: UpdateOrdersDto) {
    const order = await this.ordersRepository.update(id, dto);
    if (!order) {
      throw new BadRequestException('Pedido não encontrado');
    }
    return order;
  }

  async delete(id: Orders['id']) {
    const order = await this.ordersRepository.findOne({ where: { id } });
    if (!order) {
      throw new BadRequestException('Pedido não encontrado');
    }
    await this.ordersRepository.delete(order);
  }
}
