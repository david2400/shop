import {Module} from '@nestjs/common'
import {OrderModule} from '@modules/sales/order/order.module'
import {ProductOrderModule} from '@modules/sales/product-order/product-order.module'
import {BillingModule} from '@modules/sales/billing/billing.module'

@Module({
  imports: [OrderModule, ProductOrderModule, BillingModule],
  exports: [OrderModule, ProductOrderModule, BillingModule],
})
export class SalesModule {}
