import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import {Subcategory} from '@modules/catalog/subcategory/entities/subcategory.entity'
import {BaseAbstractRepository} from '@common/repository/base.abstract.repository'

@Injectable()
export class SubcategoryRepository extends BaseAbstractRepository<Subcategory> {
  constructor(
    @InjectRepository(Subcategory)
    private readonly subcategoryRepository: Repository<Subcategory>
  ) {
    super(subcategoryRepository)
  }
}
