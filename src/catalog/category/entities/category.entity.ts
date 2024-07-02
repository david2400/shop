import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm'
import {BaseEntity} from '@common/class/entities/base.abstract.entities'
import {Subcategory} from '@modules/catalog/subcategory/entities/subcategory.entity'

@Entity('category')
export class Category extends BaseEntity {
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

  @OneToMany(() => Subcategory, (subcategory) => subcategory.category, {
    eager: true,
    lazy: true,
  })
  subcategory: Subcategory[]
}
