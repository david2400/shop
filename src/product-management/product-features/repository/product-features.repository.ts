import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import {BaseAbstractRepository} from '@/common/class/base.abstract.repository'
import {ProductFeature} from '@modules/product-management/product-features/entities/product-feature.entity'

@Injectable()
export class ProductFeaturesRepository extends BaseAbstractRepository<ProductFeature> {
  constructor(
    @InjectRepository(ProductFeature)
    private readonly productFeatureRepository: Repository<ProductFeature>
  ) {
    super(productFeatureRepository)
  }
}
