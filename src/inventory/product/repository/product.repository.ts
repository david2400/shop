import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import {Product} from '@modules/inventory/product/entities/product.entity'
import {BaseAbstractRepository} from '@common/repository/base.abstract.repository'

@Injectable()
export class ProductRepository extends BaseAbstractRepository<Product> {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>
  ) {
    super(productRepository)
  }
}
