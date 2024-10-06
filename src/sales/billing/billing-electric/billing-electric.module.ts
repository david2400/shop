import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {BillingElectric} from '@modules/sales/billing/billing-electric/entities/billing-electric.entity'
import {BillingElectricRepository} from '@modules/sales/billing/billing-electric/repository/billing-electric.repository'
import {BillingElectricService} from '@modules/sales/billing/billing-electric/services/billing-electric.service'
import {BillingElectricController} from '@modules/sales/billing/billing-electric/controller/billing-electric.controller'

@Module({
  imports: [TypeOrmModule.forFeature([BillingElectric])],
  exports: [BillingElectricService],
  providers: [BillingElectricService, BillingElectricRepository],
  controllers: [BillingElectricController],
})
export class BillingElectricModule {}
