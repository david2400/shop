import {Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm'
import {BaseEntity} from '@common/class/entities/base.abstract.entities'
import {Category} from '@modules/catalog/category/entities/category.entity'
import {Product} from '@modules/inventory/product/entities/product.entity'

@Entity('Subcategory')
export class Subcategory extends BaseEntity {
  @PrimaryGeneratedColumn({type: 'int', unsigned: true, name: 'Id'})
  Id: number

  @Column({
    type: 'varchar',
    nullable: false,
  })
  Name: string

  @Column({
    type: 'varchar',
    nullable: true,
  })
  Slug: string

  @ManyToOne(() => Category, (category) => category.Subcategory, {
    cascade: true,
    lazy: true,
  })
  @JoinColumn([{name: 'CategoryId', referencedColumnName: 'Id'}])
  Category: Category

  @OneToMany(() => Product, (product) => product.Subcategory, {
    lazy: true,
  })
  Product: Product[]
}
