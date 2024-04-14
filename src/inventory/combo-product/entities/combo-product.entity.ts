import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm'
import {BaseEntity} from '@common/class/entities/base.abstract.entities'
import {Combo} from '@modules/inventory/combos/entities/combo.entity'
import {Product} from '@modules/inventory/product/entities/product.entity'

@Entity('ComboProduct')
export class ComboProduct extends BaseEntity {
  @PrimaryGeneratedColumn({type: 'int', unsigned: true, name: 'Id'})
  Id: number

  @Column({
    type: 'int',
    nullable: false,
  })
  Quantity: number

  @ManyToOne(() => Product, (product) => product.ComboProduct, {
    cascade: true,
    lazy: true,
  })
  @JoinColumn([{name: 'ProductId', referencedColumnName: 'Id'}])
  Product: Product

  @ManyToOne(() => Combo, (combo) => combo.ComboProduct, {
    cascade: true,
    lazy: true,
  })
  @JoinColumn([{name: 'ComboId', referencedColumnName: 'Id'}])
  Combo: Combo
}
