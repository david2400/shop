import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm'
import {BaseEntity} from '@common/class/base.abstract.entities'
import {ProductOrder} from '@modules/sales/product-order/entities/product-order.entity'
import {Bill} from '../../billing/bill/entities/bill.entity'

@Entity('Order')
export class Order extends BaseEntity {
  @PrimaryGeneratedColumn({type: 'int', unsigned: true, name: 'id'})
  id: number

  @Column({
    type: 'varchar',
    nullable: true,
  })
  complementary_order: string

  @Column({
    type: 'varchar',
    nullable: false,
  })
  state: string

  @Column({
    type: 'decimal',
    nullable: false,
  })
  total: number

  @OneToMany(() => ProductOrder, (productOrder) => productOrder.product, {
    eager: true,
    lazy: true,
  })
  product_order: ProductOrder[]

  @OneToMany(() => Bill, (bil) => bil.order, {
    lazy: true,
  })
  bill: Bill[]
}
