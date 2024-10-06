import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm'
import {BaseEntity} from '@common/class/base.abstract.entities'
import {ComboProduct} from '@modules/inventory/combo-product/entities/combo-product.entity'

@Entity('combo')
export class Combo extends BaseEntity {
  @PrimaryGeneratedColumn({type: 'int', unsigned: true, name: 'id'})
  id: number

  @Column({
    type: 'varchar',
    nullable: false,
  })
  name: string

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  description: string

  @Column({
    type: 'varchar',
    nullable: true,
  })
  image_url?: string

  @Column({
    type: 'bit',
    nullable: false,
    default: true,
  })
  available: boolean

  @Column({
    type: 'decimal',
    nullable: false,
  })
  real_price: number

  @Column({
    type: 'decimal',
    nullable: false,
  })
  price: number

  @OneToMany(() => ComboProduct, (comboProduct) => comboProduct.combo, {
    eager: true,
    lazy: true,
  })
  combo_product: ComboProduct[]
}
