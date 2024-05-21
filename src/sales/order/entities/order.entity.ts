import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm'
import {BaseEntity} from '@common/class/entities/base.abstract.entities'
import {ProductOrder} from '@modules/sales/product-order/entities/product-order.entity'
import {Bill} from '../../billing/bill/entities/bill.entity'

@Entity('Order')
export class Order extends BaseEntity {
  @PrimaryGeneratedColumn({type: 'int', unsigned: true, name: 'Id'})
  Id: number

  @Column({
    type: 'varchar',
    nullable: true,
  })
  ComplementaryOrder: string

  @Column({
    type: 'varchar',
    nullable: false,
  })
  State: string

  @Column({
    type: 'decimal',
    nullable: false,
  })
  Total: number

  @OneToMany(() => ProductOrder, (productOrder) => productOrder.Product, {
    eager: true,
    lazy: true,
  })
  ProductOrder: ProductOrder[]

  @OneToMany(() => Bill, (bil) => bil.Order, {
    lazy: true,
  })
  Bill: Bill[]
}
