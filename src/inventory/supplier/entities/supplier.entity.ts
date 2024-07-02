import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm'
import {BaseEntity} from '@common/class/entities/base.abstract.entities'
import {Product} from '@modules/inventory/product/entities/product.entity'

@Entity('supplier')
export class Supplier extends BaseEntity {
  @PrimaryGeneratedColumn({type: 'int', unsigned: true, name: 'id'})
  id: number

  @Column({
    type: 'varchar',
    nullable: false,
  })
  name: string

  @Column({
    type: 'varchar',
    nullable: false,
  })
  phone: string

  @Column({
    type: 'varchar',
    nullable: false,
  })
  address: string

  @Column({
    type: 'varchar',
    nullable: false,
  })
  email: string

  @OneToMany(() => Product, (productSupplier) => productSupplier.supplier, {
    eager: true,
    lazy: true,
  })
  product: Product[]
}
