import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm'
import {BaseEntity} from '@common/class/base.abstract.entities'
import {UnitProduct} from '@modules/product-management/unit-product/entities/unit-product.entity'
import {Product} from '@modules/inventory/product/entities/product.entity'
import {Feature} from '@modules/product-management/features/entities/feature.entity'

@Entity('FeaturesProduct')
export class ProductFeature extends BaseEntity {
  @PrimaryGeneratedColumn({type: 'int', unsigned: true, name: 'id'})
  id: number

  @Column({
    type: 'int',
    nullable: false,
  })
  value: number

  @Column({
    type: 'varchar',
    nullable: true,
  })
  extra_data: string

  @Column({
    type: 'int',
    nullable: false,
    unsigned: true,
  })
  unit_product_id: number

  @ManyToOne(() => UnitProduct, (unit) => unit.product_feature, {
    cascade: true,
    lazy: true,
    eager: true,
    persistence: false,
  })
  @JoinColumn([{name: 'unit_product_id', referencedColumnName: 'id'}])
  unit_product: UnitProduct

  @Column({
    type: 'int',
    nullable: false,
    unsigned: true,
  })
  product_id: number

  @ManyToOne(() => Product, (product) => product.product_feature, {
    cascade: true,
    lazy: true,
    persistence: false,
  })
  @JoinColumn([{name: 'product_id', referencedColumnName: 'id'}])
  product: Product

  @Column({
    type: 'int',
    nullable: false,
    unsigned: true,
  })
  feature_id: number

  @ManyToOne(() => Feature, (feature) => feature.product_feature, {
    cascade: true,
    lazy: true,
    eager: true,
    persistence: false,
  })
  @JoinColumn([{name: 'feature id', referencedColumnName: 'id'}])
  feature: Feature
}
