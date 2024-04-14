import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import {BaseAbstractRepository} from '@common/repository/base.abstract.repository'
import {ProductOrder} from '@modules/sales/product-order/entities/product-order.entity'

@Injectable()
export class ProductOrderRepository extends BaseAbstractRepository<ProductOrder> {
  constructor(
    @InjectRepository(ProductOrder)
    private readonly productOrderRepository: Repository<ProductOrder>
  ) {
    super(productOrderRepository)
  }
}
