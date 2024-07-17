import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {ProductModule} from '@modules/inventory/product/product.module'
import {UnitProductModule} from '@modules/product-management/unit-product/unit-product.module'
import {FeaturesModule} from '@modules/product-management/features/features.module'
import {ProductFeature} from '@modules/product-management/product-features/entities/product-feature.entity'
import {ProductFeaturesRepository} from '@modules/product-management/product-features/repository/product-features.repository'
import {ProductFeaturesService} from '@modules/product-management/product-features/services/impl/product-features.service'
import {ProductFeaturesController} from '@modules/product-management/product-features/controller/product-features.controller'

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductFeature]),
    ProductModule,
    UnitProductModule,
    FeaturesModule,
  ],
  providers: [ProductFeaturesService, ProductFeaturesRepository],
  exports: [ProductFeaturesService],
  controllers: [ProductFeaturesController],
})
export class ProductFeaturesModule {}
