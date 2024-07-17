import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {Plan} from '@modules/userPreferences/plans/entities/plan.entity'
import {PlansRepository} from '@modules/userPreferences/plans/repository/plans.repository'
import {PlansService} from '@modules/userPreferences/plans/services/impl/plans.service'
import {PlansController} from '@modules/userPreferences/plans/controller/plans.controller'

@Module({
  imports: [TypeOrmModule.forFeature([Plan])],
  providers: [PlansService, PlansRepository],
  exports: [PlansService],
  controllers: [PlansController],
})
export class PlansModule {}
