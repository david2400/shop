import {Product} from '@modules/inventory/product/entities/product.entity'
import {PrimaryGeneratedColumn, Column, Entity, OneToMany} from 'typeorm'
import {BaseEntity} from '@common/class/entities/base.abstract.entities'

@Entity('Brand')
export class Brand extends BaseEntity {
  @PrimaryGeneratedColumn({type: 'int', unsigned: true, name: 'Id'})
  Id: number

  @Column({
    type: 'varchar',
    nullable: false,
  })
  Name: string

  @OneToMany(() => Product, (product) => product.Brand, {
    eager: true,
    lazy: true,
  })
  Product: Product[]
}
