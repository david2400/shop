import {Module} from '@nestjs/common'
import {BillingPhysicalModule} from '@modules/sales/billing/billing-physical/billing-physical.module'
import {BillingElectricModule} from '@modules/sales/billing/billing-electric/billing-electric.module'

@Module({
  imports: [BillingPhysicalModule, BillingElectricModule],
  exports: [BillingPhysicalModule, BillingElectricModule],
})
export class BillingModule {}
