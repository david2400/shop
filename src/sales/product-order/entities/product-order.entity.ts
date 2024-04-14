import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm'
import {BaseEntity} from '@common/class/entities/base.abstract.entities'
import {Product} from '@modules/inventory/product/entities/product.entity'
import {Order} from '@modules/sales/order/entities/order.entity'

@Entity('ProductOrder')
export class ProductOrder extends BaseEntity {
  @PrimaryGeneratedColumn({type: 'int', unsigned: true, name: 'Id'})
  Id: number

  @Column({
    type: 'int',
    nullable: false,
  })
  Quantity: number

  @Column({
    type: 'decimal',
    nullable: false,
  })
  Discount: number

  @Column({
    type: 'decimal',
    nullable: false,
  })
  Subtotal: number

  @Column({
    type: 'decimal',
    nullable: false,
  })
  Total: number

  @ManyToOne(() => Product, (product) => product.ProductOrder, {
    cascade: true,
    lazy: true,
  })
  @JoinColumn([{name: 'ProductId', referencedColumnName: 'Id'}])
  Product: Product

  @ManyToOne(() => Order, (order) => order.ProductOrder, {
    cascade: true,
    lazy: true,
  })
  @JoinColumn([{name: 'OrderId', referencedColumnName: 'Id'}])
  Order: Order
}
