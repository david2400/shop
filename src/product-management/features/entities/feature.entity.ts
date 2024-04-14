import {Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn} from 'typeorm'
import {BaseEntity} from '@common/class/entities/base.abstract.entities'
import {UnitProduct} from '@modules/product-management/unit-product/entities/unit-product.entity'
import {ProductFeature} from '@modules/product-management/product-features/entities/product-feature.entity'

@Entity('Features')
export class Feature extends BaseEntity {
  @PrimaryGeneratedColumn({type: 'int', unsigned: true, name: 'Id'})
  Id: number

  @Column({
    type: 'varchar',
    nullable: false,
  })
  Name: string

  @ManyToMany(() => UnitProduct, (unit) => unit.UnitFeature, {lazy: true, eager: true})
  FeatureUnit: UnitProduct[]

  @OneToMany(() => ProductFeature, (productFeature) => productFeature.Feature, {
    lazy: true,
    eager: true,
  })
  ProductFeature: ProductFeature[]
}
