import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {Customization} from '@modules/userPreferences/customization/entities/customization.entity'
import {CustomizationRepository} from '@modules/userPreferences/customization/repository/customization.repository'
import {CustomizationService} from '@modules/userPreferences/customization/services/customization.service'
import {CustomizationController} from '@modules/userPreferences/customization/controller/customization.controller'

@Module({
  imports: [TypeOrmModule.forFeature([Customization])],
  providers: [CustomizationService, CustomizationRepository],
  exports: [CustomizationService],
  controllers: [CustomizationController],
})
export class CustomizationModule {}
