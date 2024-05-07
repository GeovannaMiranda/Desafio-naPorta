import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Clients' })
export class Clients {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  document: string;

  @Column()
  address: string;
}
