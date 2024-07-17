import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {BillingPhysical} from '@modules/sales/billing/billing-physical/entities/billing-physical.entity'
import {BillingPhysicalRepository} from '@modules/sales/billing/billing-physical/repository/billing-physical.repository'
import {BillingPhysicalService} from '@modules/sales/billing/billing-physical/services/impl/billing-physical.service'
import {BillingPhysicalController} from '@modules/sales/billing/billing-physical/controller/billing-physical.controller'

@Module({
  imports: [TypeOrmModule.forFeature([BillingPhysical])],
  exports: [BillingPhysicalService],
  providers: [BillingPhysicalService, BillingPhysicalRepository],
  controllers: [BillingPhysicalController],
})
export class BillingPhysicalModule {}
