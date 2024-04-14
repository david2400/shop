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
  @PrimaryGeneratedColumn({type: 'int', unsigned: true, name: 'Id'})
  Id: number

  @Column({
    type: 'varchar',
    nullable: false,
  })
  Name: string

  @OneToOne(() => UnitProduct, {nullable: true})
  @JoinColumn({name: 'GreaterUnitId'})
  GreaterUnit: UnitProduct

  @OneToOne(() => UnitProduct, {nullable: true})
  @JoinColumn({name: 'SmallerUnitId'})
  SmallerUnit: UnitProduct

  @ManyToMany(() => Feature, (feature) => feature.FeatureUnit, {
    cascade: true,
    onUpdate: 'CASCADE',
    lazy: true,
  })
  @JoinTable({
    name: 'FeatureUnit',
    joinColumn: {
      name: 'UnitProductId',
    },
    inverseJoinColumn: {
      name: 'FeatureId',
    },
  })
  UnitFeature: Feature[]

  @OneToMany(() => ProductFeature, (featureProduct) => featureProduct.UnitProduct, {
    lazy: true,
  })
  ProductFeature: ProductFeature[]

  @BeforeInsert()
  @BeforeUpdate()
  validateUnits() {
    if (this.GreaterUnit && this.GreaterUnit.Id === this.Id) {
      throw new Error('GreaterUnit cannot be the same as the current unit.')
    }

    if (this.SmallerUnit && this.SmallerUnit.Id === this.Id) {
      throw new Error('SmallerUnit cannot be the same as the current unit.')
    }
  }
}
