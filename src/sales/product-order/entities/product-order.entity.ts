import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm'
import {BaseEntity} from '@common/class/entities/base.abstract.entities'
import {Product} from '@modules/inventory/product/entities/product.entity'
import {Order} from '@modules/sales/order/entities/order.entity'

@Entity('ProductOrder')
export class ProductOrder extends BaseEntity {
  @PrimaryGeneratedColumn({type: 'int', unsigned: true, name: 'id'})
  id: number

  @Column({
    type: 'int',
    nullable: false,
  })
  quantity: number

  @Column({
    type: 'decimal',
    nullable: false,
  })
  discount: number

  @Column({
    type: 'decimal',
    nullable: false,
  })
  subtotal: number

  @Column({
    type: 'decimal',
    nullable: false,
  })
  total: number

  @ManyToOne(() => Product, (product) => product.ProductOrder, {
    cascade: true,
    lazy: true,
  })
  @JoinColumn([{name: 'product_id', referencedColumnName: 'id'}])
  product: Product

  @ManyToOne(() => Order, (order) => order.product_order, {
    cascade: true,
    lazy: true,
  })
  @JoinColumn([{name: 'order_id', referencedColumnName: 'id'}])
  order: Order
}
