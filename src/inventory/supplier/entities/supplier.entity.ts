import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm'
import {BaseEntity} from '@common/class/entities/base.abstract.entities'
import {Product} from '@modules/inventory/product/entities/product.entity'

@Entity('Supplier')
export class Supplier extends BaseEntity {
  @PrimaryGeneratedColumn({type: 'int', unsigned: true, name: 'Id'})
  Id: number

  @Column({
    type: 'varchar',
    nullable: false,
  })
  Name: string

  @Column({
    type: 'varchar',
    nullable: false,
  })
  Phone: string

  @Column({
    type: 'varchar',
    nullable: false,
  })
  Address: string

  @Column({
    type: 'varchar',
    nullable: false,
  })
  Email: string

  @OneToMany(() => Product, (productSupplier) => productSupplier.Supplier, {
    eager: true,
    lazy: true,
  })
  Product: Product[]
}
