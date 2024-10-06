import {Product} from '@modules/inventory/product/entities/product.entity'
import {PrimaryGeneratedColumn, Column, Entity, OneToMany} from 'typeorm'
import {BaseEntity} from '@common/class/base.abstract.entities'

@Entity('brands')
export class Brand extends BaseEntity {
  @PrimaryGeneratedColumn({type: 'int', unsigned: true, name: 'id'})
  id: number

  @Column({
    type: 'varchar',
    nullable: false,
  })
  name: string

  @OneToMany(() => Product, (product) => product.brand, {
    lazy: true,
  })
  product: Product[]
}
