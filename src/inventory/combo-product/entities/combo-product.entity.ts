import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm'
import {BaseEntity} from '@common/class/entities/base.abstract.entities'
import {Combo} from '@modules/inventory/combos/entities/combo.entity'
import {Product} from '@modules/inventory/product/entities/product.entity'

@Entity('combo_product')
export class ComboProduct extends BaseEntity {
  @PrimaryGeneratedColumn({type: 'int', unsigned: true, name: 'id'})
  id: number

  @Column({
    type: 'int',
    nullable: false,
  })
  quantity: number

  @ManyToOne(() => Product, (product) => product.combo_product, {
    cascade: true,
    lazy: true,
  })
  @JoinColumn([{name: 'ProductId', referencedColumnName: 'id'}])
  product: Product

  @ManyToOne(() => Combo, (combo) => combo.combo_product, {
    cascade: true,
    lazy: true,
  })
  @JoinColumn([{name: 'ComboId', referencedColumnName: 'id'}])
  combo: Combo
}
