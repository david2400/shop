import {Module, forwardRef} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {ComboProductModule} from '@modules/inventory/combo-product/combo-product.module'
import {Combo} from '@modules/inventory/combos/entities/combo.entity'
import {ComboRepository} from '@modules/inventory/combos/repository/combos.repository'
import {CombosService} from '@/src/inventory/combos/services/combos.service'
import {CombosController} from '@modules/inventory/combos/controller/combos.controller'

@Module({
  imports: [TypeOrmModule.forFeature([Combo]), ComboProductModule],
  providers: [CombosService, ComboRepository],
  exports: [CombosService],
  controllers: [CombosController],
})
export class CombosModule {}
