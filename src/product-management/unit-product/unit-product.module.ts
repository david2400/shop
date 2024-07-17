import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {UnitProduct} from '@modules/product-management/unit-product/entities/unit-product.entity'
import {UnitProductRepository} from '@modules/product-management/unit-product/repository/unit-product.repository'
import {UnitProductService} from '@modules/product-management/unit-product/services/impl/unit-product.service'
import {UnitProductController} from '@modules/product-management/unit-product/controller/unit-product.controller'

@Module({
  imports: [TypeOrmModule.forFeature([UnitProduct])],
  providers: [UnitProductService, UnitProductRepository],
  exports: [UnitProductService],
  controllers: [UnitProductController],
})
export class UnitProductModule {}
