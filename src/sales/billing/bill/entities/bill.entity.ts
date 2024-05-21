import {Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm'
import {Order} from '@/src/sales/order/entities/order.entity'

@Entity('Bill')
export class Bill {
  @PrimaryGeneratedColumn({type: 'int', unsigned: true, name: 'Id'})
  Id: number

  @ManyToOne(() => Order, (order) => order.Bill, {
    cascade: true,
    lazy: true,
  })
  @JoinColumn([{name: 'OrderId', referencedColumnName: 'Id'}])
  Order: Order
}
