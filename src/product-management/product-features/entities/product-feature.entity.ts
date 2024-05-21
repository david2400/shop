import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm'
import {BaseEntity} from '@common/class/entities/base.abstract.entities'
import {UnitProduct} from '@modules/product-management/unit-product/entities/unit-product.entity'
import {Product} from '@modules/inventory/product/entities/product.entity'
import {Feature} from '@modules/product-management/features/entities/feature.entity'

@Entity('FeaturesProduct')
export class ProductFeature extends BaseEntity {
  @PrimaryGeneratedColumn({type: 'int', unsigned: true, name: 'Id'})
  Id: number

  @Column({
    type: 'int',
    nullable: false,
  })
  Value: number

  @Column({
    type: 'varchar',
    nullable: true,
  })
  ExtraData: string

  @ManyToOne(() => UnitProduct, (unit) => unit.ProductFeature, {
    cascade: true,
    lazy: true,
    eager: true,
  })
  @JoinColumn([{name: 'UnitProductId', referencedColumnName: 'Id'}])
  UnitProduct: UnitProduct

  @ManyToOne(() => Product, (product) => product.ProductFeature, {
    cascade: true,
    lazy: true,
  })
  @JoinColumn([{name: 'ProductId', referencedColumnName: 'Id'}])
  Product: Product

  @ManyToOne(() => Feature, (feature) => feature.ProductFeature, {
    cascade: true,
    lazy: true,
    eager: true,
  })
  @JoinColumn([{name: 'FeatureId', referencedColumnName: 'Id'}])
  Feature: Feature
}
