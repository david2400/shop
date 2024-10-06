import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm'
import {BaseEntity} from '@common/class/base.abstract.entities'
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

  @Column({
    type: 'int',
    nullable: false,
    unsigned: true,
  })
  product_id: number

  @ManyToOne(() => Product, (product) => product.combo_product, {
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
  combo_id: number

  @ManyToOne(() => Combo, (combo) => combo.combo_product, {
    cascade: true,
    lazy: true,
    persistence: false,
  })
  @JoinColumn([{name: 'combo_id', referencedColumnName: 'id'}])
  combo: Combo
}
