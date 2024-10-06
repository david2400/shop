import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import {BaseAbstractRepository} from '@/common/class/base.abstract.repository'
import {Feature} from '@modules/product-management/features/entities/feature.entity'

@Injectable()
export class FeaturesRepository extends BaseAbstractRepository<Feature> {
  constructor(
    @InjectRepository(Feature)
    private readonly featureRepository: Repository<Feature>
  ) {
    super(featureRepository)
  }
}
