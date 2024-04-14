import {Module, forwardRef} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {ProductModule} from '../product/product.module'
import {CombosModule} from '../combos/combos.module'
import {ComboProduct} from './entities/combo-product.entity'
import {ComboProductService} from '@modules/inventory/combo-product/services/combo-product.service'
import {ComboProductController} from '@modules/inventory/combo-product/controller/combo-product.controller'
import {ComboProductRepository} from './repository/combo-product.repository'

@Module({
  imports: [
    TypeOrmModule.forFeature([ComboProduct]),
    ProductModule,
    forwardRef(() => CombosModule),
  ],
  providers: [ComboProductService, ComboProductRepository],
  exports: [ComboProductService],
  controllers: [ComboProductController],
})
export class ComboProductModule {}
