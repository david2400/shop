import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import {BaseAbstractRepository} from '@common/repository/base.abstract.repository'
import {FavoriteProduct} from '@modules/userPreferences/favorite-product/entities/favorite-product.entity'

@Injectable()
export class FavoriteProductRepository extends BaseAbstractRepository<FavoriteProduct> {
  constructor(
    @InjectRepository(FavoriteProduct)
    private readonly favoriteproductRepository: Repository<FavoriteProduct>
  ) {
    super(favoriteproductRepository)
  }
}
