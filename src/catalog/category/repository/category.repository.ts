import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import {Category} from '@modules/catalog/category/entities/category.entity'
import {BaseAbstractRepository} from '@/common/class/base.abstract.repository'

@Injectable()
export class CategoryRepository extends BaseAbstractRepository<Category> {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>
  ) {
    super(categoryRepository)
  }
}
