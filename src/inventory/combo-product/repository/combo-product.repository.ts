import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import {ComboProduct} from '@modules/inventory/combo-product/entities/combo-product.entity'
import {BaseAbstractRepository} from '@common/repository/base.abstract.repository'

@Injectable()
export class ComboProductRepository extends BaseAbstractRepository<ComboProduct> {
  constructor(
    @InjectRepository(ComboProduct)
    private readonly comboProductRepository: Repository<ComboProduct>
  ) {
    super(comboProductRepository)
  }
}
