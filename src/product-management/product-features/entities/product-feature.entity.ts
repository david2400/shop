import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm'
import {BaseEntity} from '@common/class/entities/base.abstract.entities'
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

  @ManyToOne(() => UnitProduct, (unit) => unit.product_feature, {
    cascade: true,
    lazy: true,
    eager: true,
  })
  @JoinColumn([{name: 'unit_product_id', referencedColumnName: 'id'}])
  unit_product: UnitProduct

  @ManyToOne(() => Product, (product) => product.ProductFeature, {
    cascade: true,
    lazy: true,
  })
  @JoinColumn([{name: 'product_id', referencedColumnName: 'id'}])
  product: Product

  @ManyToOne(() => Feature, (feature) => feature.product_feature, {
    cascade: true,
    lazy: true,
    eager: true,
  })
  @JoinColumn([{name: 'feature id', referencedColumnName: 'id'}])
  feature: Feature
}
