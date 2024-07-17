import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {Order} from '@modules/sales/order/entities/order.entity'
import {OrderRepository} from '@modules/sales/order/repository/order.repository'
import {OrderService} from '@modules/sales/order/services/impl/order.service'
import {OrderController} from '@modules/sales/order/controller/order.controller'

@Module({
  imports: [TypeOrmModule.forFeature([Order])],
  exports: [OrderService],
  providers: [OrderService, OrderRepository],
  controllers: [OrderController],
})
export class OrderModule {}
