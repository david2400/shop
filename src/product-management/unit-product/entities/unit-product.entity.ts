import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'
import {BaseEntity} from '@common/class/entities/base.abstract.entities'
import {ProductFeature} from '@modules/product-management/product-features/entities/product-feature.entity'
import {Feature} from '@modules/product-management/features/entities/feature.entity'

@Entity('UnitProduct')
export class UnitProduct extends BaseEntity {
  @PrimaryGeneratedColumn({type: 'int', unsigned: true, name: 'id'})
  id: number

  @Column({
    type: 'varchar',
    nullable: false,
  })
  name: string

  @OneToOne(() => UnitProduct, {nullable: true})
  @JoinColumn({name: 'greater_unit_id'})
  greater_unit: UnitProduct

  @OneToOne(() => UnitProduct, {nullable: true})
  @JoinColumn({name: 'smaller_unit_id'})
  smaller_unit: UnitProduct

  @ManyToMany(() => Feature, (feature) => feature.feature_unit, {
    cascade: true,
    onUpdate: 'CASCADE',
    lazy: true,
  })
  @JoinTable({
    name: 'FeatureUnit',
    joinColumn: {
      name: 'unit_product_id',
    },
    inverseJoinColumn: {
      name: 'feature_id',
    },
  })
  unit_feature: Feature[]

  @OneToMany(() => ProductFeature, (featureProduct) => featureProduct.unit_product, {
    lazy: true,
  })
  product_feature: ProductFeature[]

  @BeforeInsert()
  @BeforeUpdate()
  validateUnits() {
    if (this.greater_unit && this.greater_unit.id === this.id) {
      throw new Error('GreaterUnit cannot be the same as the current unit.')
    }

    if (this.smaller_unit && this.smaller_unit.id === this.id) {
      throw new Error('SmallerUnit cannot be the same as the current unit.')
    }
  }
}
