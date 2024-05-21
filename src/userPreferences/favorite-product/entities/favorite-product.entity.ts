import {Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm'
import {BaseEntity} from '@common/class/entities/base.abstract.entities'
import {Product} from '@modules/inventory/product/entities/product.entity'
import {Client} from '@modules/account/client/entities/client.entity'

@Entity('FavoriteProduct')
export class FavoriteProduct extends BaseEntity {
  @PrimaryGeneratedColumn({type: 'int', unsigned: true, name: 'Id'})
  Id: number

  @ManyToOne(() => Product, (product) => product.FavoriteProduct, {
    cascade: true,
    lazy: true,
  })
  @JoinColumn([{name: 'ProductId', referencedColumnName: 'Id'}])
  Product: Product

  @ManyToOne(() => Client, (client) => client.FavoriteProduct, {
    cascade: true,
    lazy: true,
  })
  @JoinColumn([{name: 'ClientId', referencedColumnName: 'Id'}])
  Client: Client
}
