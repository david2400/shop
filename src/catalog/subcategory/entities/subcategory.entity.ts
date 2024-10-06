import {Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm'
import {BaseEntity} from '@common/class/base.abstract.entities'
import {Category} from '@modules/catalog/category/entities/category.entity'
import {Product} from '@modules/inventory/product/entities/product.entity'

@Entity('subcategory')
export class Subcategory extends BaseEntity {
  @PrimaryGeneratedColumn({type: 'int', unsigned: true, name: 'id'})
  id: number

  @Column({
    type: 'varchar',
    nullable: false,
  })
  name: string

  @Column({
    type: 'varchar',
    nullable: true,
  })
  slug: string

  @Column({
    type: 'int',
    nullable: false,
    unsigned: true,
  })
  category_id: number

  @ManyToOne(() => Category, (category) => category.subcategory, {
    cascade: true,
    lazy: true,
    persistence: false,
  })
  @JoinColumn([{name: 'category_id', referencedColumnName: 'id'}])
  category: Category

  @OneToMany(() => Product, (product) => product.subcategory, {
    lazy: true,
  })
  product: Product[]
}
