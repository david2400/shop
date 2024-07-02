import {Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm'
import {Order} from '@modules/sales/order/entities/order.entity'

@Entity('bill')
export class Bill {
  @PrimaryGeneratedColumn({type: 'int', unsigned: true, name: 'id'})
  id: number

  @ManyToOne(() => Order, (order) => order.bill, {
    cascade: true,
    lazy: true,
  })
  @JoinColumn([{name: 'OrderId', referencedColumnName: 'id'}])
  Order: Order
}
