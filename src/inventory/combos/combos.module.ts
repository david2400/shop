import {Module, forwardRef} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {ComboProductModule} from '@modules/inventory/combo-product/combo-product.module'
import {combo} from '@modules/inventory/combos/entities/combo.entity'
import {ComboRepository} from '@modules/inventory/combos/repository/combos.repository'
import {CombosService} from '@modules/inventory/combos/services/impl/combos.service'
import {CombosController} from '@modules/inventory/combos/controller/combos.controller'

@Module({
  imports: [TypeOrmModule.forFeature([combo]), ComboProductModule],
  providers: [CombosService, ComboRepository],
  exports: [CombosService],
  controllers: [CombosController],
})
export class CombosModule {}
