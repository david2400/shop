import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {ProductModule} from '@modules/inventory/product/product.module'
import {OrderModule} from '@modules/sales/order/order.module'
import {ProductOrder} from '@modules/sales/product-order/entities/product-order.entity'
import {ProductOrderRepository} from '@modules/sales/product-order/repository/product-order.repository'
import {ProductOrderService} from '@modules/sales/product-order/services/impl/product-order.service'
import {ProductOrderController} from '@modules/sales/product-order/controller/product-order.controller'

@Module({
  imports: [TypeOrmModule.forFeature([ProductOrder]), ProductModule, OrderModule],
  providers: [ProductOrderService, ProductOrderRepository],
  exports: [ProductOrderService],
  controllers: [ProductOrderController],
})
export class ProductOrderModule {}
