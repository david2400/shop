import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm'
import {BaseEntity} from '@common/class/entities/base.abstract.entities'
import {Subcategory} from '@modules/catalog/subcategory/entities/subcategory.entity'

@Entity('Category')
export class Category extends BaseEntity {
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

  @OneToMany(() => Subcategory, (subcategory) => subcategory.Category, {
    eager: true,
    lazy: true,
  })
  Subcategory: Subcategory[]
}
