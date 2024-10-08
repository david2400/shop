import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'
import {BaseEntity} from '@common/class/base.abstract.entities'
import {ProductOrder} from '@modules/sales/product-order/entities/product-order.entity'
import {FavoriteProduct} from '@modules/userPreferences/favorite-product/entities/favorite-product.entity'
import {Subcategory} from '@modules/catalog/subcategory/entities/subcategory.entity'
import {Brand} from '@modules/catalog/brand/entities/brand.entity'
import {Supplier} from '@modules/inventory/supplier/entities/supplier.entity'
import {ComboProduct} from '@modules/inventory/combo-product/entities/combo-product.entity'
import {ProductFeature} from '@modules/product-management/product-features/entities/product-feature.entity'
import {Customization} from '@modules/userPreferences/customization/entities/customization.entity'

@Entity('product')
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn({type: 'int', unsigned: true, name: 'id'})
  id: number

  @Column({
    type: 'varchar',
    nullable: false,
  })
  name: string

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  description: string

  @Column({
    type: 'int',
    nullable: false,
  })
  stock: number

  @Column({
    type: 'decimal',
    nullable: false,
  })
  real_price: number

  @Column({
    type: 'decimal',
    nullable: false,
  })
  unit_price: number

  @Column({
    type: 'decimal',
    nullable: false,
  })
  length: number

  @Column({
    type: 'decimal',
    nullable: false,
  })
  width: number

  @Column({
    type: 'decimal',
    nullable: false,
  })
  height: number

  @Column({
    type: 'decimal',
    nullable: false,
  })
  weight: number

  @Column({
    type: 'varchar',
    nullable: true,
  })
  image_url?: string

  @Column({
    type: 'bit',
    nullable: false,
    default: true,
  })
  available: boolean

  @Column({
    type: 'int',
    nullable: false,
    unsigned: true,
  })
  brand_id: number

  @ManyToOne(() => Brand, (brand) => brand.product, {
    cascade: true,
    lazy: true,
    persistence: false,
  })
  @JoinColumn([{name: 'brand_id', referencedColumnName: 'id'}])
  brand: Brand

  @Column({
    type: 'int',
    nullable: false,
    unsigned: true,
  })
  subcategory_id: number

  @ManyToOne(() => Subcategory, (subcategory) => subcategory.product, {
    cascade: true,
    lazy: true,
    eager: true,
    persistence: false,
  })
  @JoinColumn([{name: 'subcategory_id', referencedColumnName: 'id'}])
  subcategory: Subcategory

  @Column({
    type: 'int',
    nullable: false,
    unsigned: true,
  })
  supplier_id: number

  @ManyToOne(() => Supplier, (supplier) => supplier.product, {
    cascade: true,
    lazy: true,
    persistence: false,
  })
  @JoinColumn([{name: 'supplier_id', referencedColumnName: 'id'}])
  supplier: Supplier

  @OneToMany(() => ProductOrder, (productOrder) => productOrder.product, {
    lazy: true,
  })
  product_order: ProductOrder[]

  @OneToMany(() => FavoriteProduct, (favorite) => favorite.product, {
    lazy: true,
  })
  favorite_product: FavoriteProduct[]

  @OneToMany(() => ComboProduct, (productcombo) => productcombo.product, {
    lazy: true,
  })
  combo_product: ComboProduct[]

  @OneToMany(() => ProductFeature, (productFeature) => productFeature.feature, {
    lazy: true,
  })
  product_feature: ProductFeature[]

  @ManyToMany(() => Customization, (customization) => customization.customization_product, {
    lazy: true,
    eager: true,
  })
  product_customization: Customization[]
}
