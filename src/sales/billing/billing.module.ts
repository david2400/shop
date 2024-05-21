import {Module} from '@nestjs/common'
import {BillModule} from '@modules/sales/billing//bill/bill.module'
import {BillingPhysicalModule} from '@modules/sales/billing/billing-physical/billing-physical.module'
import {BillingElectricModule} from '@modules/sales/billing/billing-electric/billing-electric.module'

@Module({
  imports: [BillingPhysicalModule, BillingElectricModule, BillModule],
  exports: [BillingPhysicalModule, BillingElectricModule, BillModule],
})
export class BillingModule {}
