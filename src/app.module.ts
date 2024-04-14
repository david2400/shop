import {Module} from '@nestjs/common'
import {ConfigsModule} from '@config/config.module'
import {FiltersModule} from '@common/filters/filters.module'
import {FavoriteProductModule} from '@modules/favorite-product/favorite-product.module'
import {SalesModule} from '@modules/sales/sales.module'
import {InventoryModule} from '@modules/inventory/inventory.module'
import {CatalogModule} from '@modules/catalog/catalog.module'
import {ProductManagementModule} from '@modules/product-management/product-management.module'

@Module({
  providers: [FiltersModule],
  imports: [
    ConfigsModule,
    FavoriteProductModule,
    InventoryModule,
    SalesModule,
    CatalogModule,
    ProductManagementModule,
  ],
})
export class AppModule {}
