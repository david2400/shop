import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import {Brand} from '@modules/catalog/brand/entities/brand.entity'
import {BaseAbstractRepository} from '@/common/class/base.abstract.repository'

@Injectable()
export class BrandRepository extends BaseAbstractRepository<Brand> {
  constructor(
    @InjectRepository(Brand)
    private readonly brandRepository: Repository<Brand>
  ) {
    super(brandRepository)
  }
}
