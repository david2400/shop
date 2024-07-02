import {Module} from '@nestjs/common'
import {CustomizationModule} from '@modules/userPreferences/customization/customization.module'
import {FavoriteProductModule} from '@modules/userPreferences/favorite-product/favorite-product.module'
import {PlansModule} from '@modules/userPreferences/plans/plans.module'

@Module({
  imports: [CustomizationModule, FavoriteProductModule, PlansModule],
  exports: [CustomizationModule, FavoriteProductModule, PlansModule],
})
export class UserPreferencesModule {}
