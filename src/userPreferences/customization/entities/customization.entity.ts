import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'
import {BaseEntity} from '@/common/class/entities/base.abstract.entities'
import {Product} from '@modules/inventory/product/entities/product.entity'
import {Client} from '@modules/account/client/entities/client.entity'

@Entity('customization')
export class Customization extends BaseEntity {
  @PrimaryGeneratedColumn({type: 'int', unsigned: true, name: 'id'})
  id: number

  @Column({
    type: 'decimal',
    nullable: false,
  })
  subtotal: number

  @Column({
    type: 'decimal',
    nullable: false,
  })
  total: number

  @Column({
    type: 'decimal',
    nullable: false,
  })
  discount: number

  @ManyToOne(() => Client, (client) => client.customization, {
    cascade: true,
    lazy: true,
  })
  @JoinColumn([{name: 'client_id', referencedColumnName: 'id'}])
  client: Client

  @ManyToMany(() => Product, (product) => product.ProductCustomization, {
    cascade: true,
    onUpdate: 'CASCADE',
    lazy: true,
  })
  @JoinTable({
    name: 'CustomizationProduct',
    joinColumn: {
      name: 'customization_id',
    },
    inverseJoinColumn: {
      name: 'product_id',
    },
  })
  customization_product: Product[]
}
