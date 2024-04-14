import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm'
import {BaseEntity} from '@common/class/entities/base.abstract.entities'
import {ComboProduct} from '@modules/inventory/combo-product/entities/combo-product.entity'

@Entity('Combo')
export class Combo extends BaseEntity {
  @PrimaryGeneratedColumn({type: 'int', unsigned: true, name: 'Id'})
  Id: number

  @Column({
    type: 'varchar',
    nullable: false,
  })
  Name: string

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  Description: string

  @Column({
    type: 'varchar',
    nullable: true,
  })
  ImageURL?: string

  @Column({
    type: 'bit',
    nullable: false,
    default: true,
  })
  Available: boolean

  @Column({
    type: 'decimal',
    nullable: false,
  })
  RealPrice: number

  @Column({
    type: 'decimal',
    nullable: false,
  })
  Price: number

  @OneToMany(() => ComboProduct, (comboProduct) => comboProduct.Combo, {
    eager: true,
    lazy: true,
  })
  ComboProduct: ComboProduct[]
}
