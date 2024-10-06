import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm'
import {BaseEntity} from '@common/class/base.abstract.entities'
import {Product} from '@modules/inventory/product/entities/product.entity'
import {Client} from '@modules/account/client/entities/client.entity'

@Entity('favorite_product')
export class FavoriteProduct extends BaseEntity {
  @PrimaryGeneratedColumn({type: 'int', unsigned: true, name: 'id'})
  id: number

  @Column({
    type: 'int',
    nullable: false,
    unsigned: true,
  })
  product_id: number

  @ManyToOne(() => Product, (product) => product.favorite_product, {
    cascade: true,
    lazy: true,
    persistence: false,
  })
  @JoinColumn([{name: 'product_id', referencedColumnName: 'id'}])
  product: Product

  @Column({
    type: 'int',
    nullable: false,
    unsigned: true,
  })
  client_id: number

  @ManyToOne(() => Client, (client) => client.favorite_product, {
    cascade: true,
    lazy: true,
    persistence: false,
  })
  @JoinColumn([{name: 'client_id', referencedColumnName: 'id'}])
  client: Client
}
