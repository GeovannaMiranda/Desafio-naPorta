import { Module } from '@nestjs/common';
import { Orders } from './entities/orders.entity';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';

@Module({
  imports: [Orders],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
