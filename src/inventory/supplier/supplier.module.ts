import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {Supplier} from '@modules/inventory/supplier/entities/supplier.entity'
import {SupplierRepository} from '@modules/inventory/supplier/repository/supplier.repository'
import {SupplierController} from '@modules/inventory/supplier/controller/supplier.controller'
import {SupplierService} from './services/supplier.service'

@Module({
  imports: [TypeOrmModule.forFeature([Supplier])],
  exports: [SupplierService],
  providers: [SupplierService, SupplierRepository],
  controllers: [SupplierController],
})
export class SupplierModule {}
