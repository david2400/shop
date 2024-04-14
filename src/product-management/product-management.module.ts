import {Module} from '@nestjs/common'
import {FeaturesModule} from '@modules/product-management/features/features.module'
import {UnitProductModule} from '@modules/product-management/unit-product/unit-product.module'
import {ProductFeaturesModule} from '@modules/product-management/product-features/product-features.module'

@Module({
  imports: [FeaturesModule, UnitProductModule, ProductFeaturesModule],
  exports: [FeaturesModule, UnitProductModule, ProductFeaturesModule],
})
export class ProductManagementModule {}
