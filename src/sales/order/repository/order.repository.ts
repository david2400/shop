import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import {BaseAbstractRepository} from '@common/repository/base.abstract.repository'
import {Order} from '@modules/sales/order/entities/order.entity'

@Injectable()
export class OrderRepository extends BaseAbstractRepository<Order> {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>
  ) {
    super(orderRepository)
  }
}
