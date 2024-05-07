import { OrderItems } from 'src/orders/entities/order-items.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('Orders')
export class Orders {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'Order_Number' })
  orderNumber: number;

  @Column({ name: 'Delivery_Date' })
  deliveryDate: string;

  @Column({ name: 'Client_id' })
  clientId: number;

  @Column({ name: 'Delivery_Address' })
  deliveryAddress: string;

  @Column({ name: 'Creation_Date' })
  creationDate: Date;

  @OneToMany(() => OrderItems, (item) => item.orders)
  items: OrderItems[];
}
