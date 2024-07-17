import {Module, forwardRef} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {ProductModule} from '@modules/inventory/product/product.module'
import {CombosModule} from '@modules/inventory/combos/combos.module'
import {combo_product} from '@modules/inventory/combo-product/entities/combo-product.entity'
import {ComboProductService} from '@modules/inventory/combo-product/services/impl/combo-product.service'
import {ComboProductController} from '@modules/inventory/combo-product/controller/combo-product.controller'
import {ComboProductRepository} from '@modules/inventory/combo-product/repository/combo-product.repository'

@Module({
  imports: [
    TypeOrmModule.forFeature([combo_product]),
    ProductModule,
    forwardRef(() => CombosModule),
  ],
  providers: [ComboProductService, ComboProductRepository],
  exports: [ComboProductService],
  controllers: [ComboProductController],
})
export class ComboProductModule {}
