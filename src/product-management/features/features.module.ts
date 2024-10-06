import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {UnitProductModule} from '@modules/product-management/unit-product/unit-product.module'
import {Feature} from '@modules/product-management/features/entities/feature.entity'
import {FeaturesRepository} from '@modules/product-management/features/repository/features.repository'
import {FeaturesService} from '@/src/product-management/features/services/features.service'
import {FeaturesController} from '@modules/product-management/features/controller/features.controller'

@Module({
  imports: [TypeOrmModule.forFeature([Feature]), UnitProductModule],
  providers: [FeaturesService, FeaturesRepository],
  exports: [FeaturesService],
  controllers: [FeaturesController],
})
export class FeaturesModule {}
