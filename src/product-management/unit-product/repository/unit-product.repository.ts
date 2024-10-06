import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import {BaseAbstractRepository} from '@/common/class/base.abstract.repository'
import {UnitProduct} from '@modules/product-management/unit-product/entities/unit-product.entity'

@Injectable()
export class UnitProductRepository extends BaseAbstractRepository<UnitProduct> {
  constructor(
    @InjectRepository(UnitProduct)
    private readonly unitRepository: Repository<UnitProduct>
  ) {
    super(unitRepository)
  }
}
