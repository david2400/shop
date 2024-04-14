import {Module} from '@nestjs/common'
import {ProductModule} from '@modules/inventory/product/product.module'
import {SupplierModule} from '@modules/inventory/supplier/supplier.module'
import {CombosModule} from '@modules/inventory/combos/combos.module'
import {ComboProductModule} from '@modules/inventory/combo-product/combo-product.module'

@Module({
  imports: [ProductModule, SupplierModule, CombosModule, ComboProductModule],
  exports: [ProductModule, SupplierModule, CombosModule, ComboProductModule],
})
export class InventoryModule {}
