import {Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm'
import {BaseEntity} from '@common/class/entities/base.abstract.entities'
import {ProductOrder} from '@modules/sales/product-order/entities/product-order.entity'
import {FavoriteProduct} from '@modules/favorite-product/entities/favorite-product.entity'
import {Subcategory} from '@modules/catalog/subcategory/entities/subcategory.entity'
import {Brand} from '@modules/catalog/brand/entities/brand.entity'
import {Supplier} from '@modules/inventory/supplier/entities/supplier.entity'
import {ComboProduct} from '@modules/inventory/combo-product/entities/combo-product.entity'
import {ProductFeature} from '@modules/product-management/product-features/entities/product-feature.entity'

@Entity('Product')
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn({type: 'int', unsigned: true, name: 'Id'})
  Id: number

  @Column({
    type: 'varchar',
    nullable: false,
  })
  Name: string

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  Description: string

  @Column({
    type: 'int',
    nullable: false,
  })
  Stock: number

  @Column({
    type: 'decimal',
    nullable: false,
  })
  RealPrice: number

  @Column({
    type: 'decimal',
    nullable: false,
  })
  UnitPrice: number

  @Column({
    type: 'decimal',
    nullable: false,
  })
  Length: number

  @Column({
    type: 'decimal',
    nullable: false,
  })
  Width: number

  @Column({
    type: 'decimal',
    nullable: false,
  })
  Height: number

  @Column({
    type: 'decimal',
    nullable: false,
  })
  Weight: number

  @Column({
    type: 'varchar',
    nullable: true,
  })
  ImageURL?: string

  @Column({
    type: 'bit',
    nullable: false,
    default: true,
  })
  Available: boolean

  @ManyToOne(() => Brand, (brand) => brand.Product, {
    cascade: true,
    lazy: true,
  })
  @JoinColumn([{name: 'BrandId', referencedColumnName: 'Id'}])
  Brand: Brand

  @ManyToOne(() => Subcategory, (subcategory) => subcategory.Product, {
    cascade: true,
    lazy: true,
    eager: true,
  })
  @JoinColumn([{name: 'SubcategoryId', referencedColumnName: 'Id'}])
  Subcategory: Subcategory

  @ManyToOne(() => Supplier, (supplier) => supplier.Product, {
    cascade: true,
    lazy: true,
  })
  @JoinColumn([{name: 'SupplierId', referencedColumnName: 'Id'}])
  Supplier: Supplier

  @OneToMany(() => ProductOrder, (productOrder) => productOrder.Product, {
    lazy: true,
  })
  ProductOrder: ProductOrder[]

  @OneToMany(() => FavoriteProduct, (favorite) => favorite.Product, {
    lazy: true,
  })
  FavoriteProduct: FavoriteProduct[]

  @OneToMany(() => ComboProduct, (productcombo) => productcombo.Product, {
    lazy: true,
  })
  ComboProduct: ComboProduct[]

  @OneToMany(() => ProductFeature, (productFeature) => productFeature.Feature, {
    lazy: true,
  })
  ProductFeature: ProductFeature[]
}
