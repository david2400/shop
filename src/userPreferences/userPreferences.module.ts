import {Module} from '@nestjs/common'
import {CustomizationModule} from './customization/customization.module'

@Module({
  imports: [CustomizationModule],
})
export class UserPreferencesModule {}
