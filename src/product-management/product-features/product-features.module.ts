import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {ProductFeature} from '@modules/product-management/product-features/entities/product-feature.entity'
import {ProductFeaturesRepository} from '@modules/product-management/product-features/repository/product-features.repository'
import {ProductFeaturesService} from '@modules/product-management/product-features/services/product-features.service'
import {ProductFeaturesController} from '@modules/product-management/product-features/controller/product-features.controller'

@Module({
  imports: [TypeOrmModule.forFeature([ProductFeature])],
  providers: [ProductFeaturesService, ProductFeaturesRepository],
  exports: [ProductFeaturesService],
  controllers: [ProductFeaturesController],
})
export class ProductFeaturesModule {}
