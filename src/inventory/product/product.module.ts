import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {Product} from '@modules/inventory/product/entities/product.entity'
import {ProductRepository} from '@modules/inventory/product/repository/product.repository'
import {ProductService} from '@modules/inventory/product/services/product.service'
import {ProductController} from '@modules/inventory/product/controller/product.controller'
import {BrandModule} from '@modules/catalog/brand/brand.module'
import {SubcategoryModule} from '@modules/catalog/subcategory/subcategory.module'
import {SupplierModule} from '@modules/inventory/supplier/supplier.module'

@Module({
  imports: [TypeOrmModule.forFeature([Product]), SubcategoryModule, BrandModule, SupplierModule],
  providers: [ProductService, ProductRepository],
  exports: [ProductService],
  controllers: [ProductController],
})
export class ProductModule {}
