import {Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn} from 'typeorm'
import {BaseEntity} from '@common/class/entities/base.abstract.entities'
import {UnitProduct} from '@modules/product-management/unit-product/entities/unit-product.entity'
import {ProductFeature} from '@modules/product-management/product-features/entities/product-feature.entity'

@Entity('Features')
export class Feature extends BaseEntity {
  @PrimaryGeneratedColumn({type: 'int', unsigned: true, name: 'id'})
  id: number

  @Column({
    type: 'varchar',
    nullable: false,
  })
  name: string

  @ManyToMany(() => UnitProduct, (unit) => unit.unit_feature, {lazy: true, eager: true})
  feature_unit: UnitProduct[]

  @OneToMany(() => ProductFeature, (productFeature) => productFeature.feature, {
    lazy: true,
  })
  product_feature: ProductFeature[]
}
