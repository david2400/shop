import {HttpException, HttpStatus, Injectable} from '@nestjs/common'
import {UpdateResult} from 'typeorm'
import {ClientService} from '@modules/account/client/services/client.service'
import {ProductService} from '@modules/inventory/product/services/product.service'
import {FavoriteProduct} from '@modules/userPreferences/favorite-product/entities/favorite-product.entity'
import {CreateFavoriteProductDto} from '@modules/userPreferences/favorite-product/dto/create-favorite-product.dto'
import {UpdateFavoriteProductDto} from '@modules/userPreferences/favorite-product/dto/update-favorite-product.dto'
import {FavoriteProductRepository} from '@modules/userPreferences/favorite-product/repository/favorite-product.repository'

@Injectable()
export class FavoriteProductService {
  constructor(
    private readonly favoriteRepository: FavoriteProductRepository,
    private readonly productService: ProductService,
    private readonly clientService: ClientService
  ) {}

  async createFavorite(favorite: CreateFavoriteProductDto): Promise<UpdateFavoriteProductDto> {
    const results = await this.findOne(favorite)

    if (results) {
      const result = await this.restore(results.id)

      return result
    } else {
      const newFavorite = this.favoriteRepository.create(favorite)

      const client = await this.clientService.findOne(favorite.client_id)
      if (!client) {
        throw new HttpException({message: 'The client does not exist!'}, HttpStatus.NOT_FOUND)
      }
      newFavorite.client = client

      const product = await this.productService.findOne(favorite.product_id)
      if (!product) {
        throw new HttpException({message: 'The product does not exist!'}, HttpStatus.NOT_FOUND)
      }
      newFavorite.product = product

      this.favoriteRepository.merge(newFavorite, favorite)

      const result = await this.favoriteRepository.save(newFavorite)

      return result
    }
  }

  async delete(id: number): Promise<UpdateResult> {
    const result = await this.favoriteRepository.softDelete({id: id})
    if (result.affected === 0) {
      throw new HttpException(
        {message: 'The product does not exist or could not be restored!'},
        HttpStatus.NOT_FOUND
      )
    }
    return result
  }

  async restore(id: number) {
    const result = await this.favoriteRepository.recover({id: id})

    if (result.delete_at === undefined) {
      throw new HttpException(
        {message: 'The favorite product does not exist or could not be restored!'},
        HttpStatus.NOT_FOUND
      )
    }

    return result
  }

  async findOne(body: any): Promise<FavoriteProduct> {
    const result = await this.favoriteRepository.findOne({
      where: {
        client: {id: body.idClient},
        product: {id: body.idProduct},
      },
      withDeleted: true,
    })
    return result
  }

  async findAllFavoriteClient(idClient: number): Promise<FavoriteProduct[]> {
    const result = await this.favoriteRepository.find({
      where: {
        client: {id: idClient},
      },
    })
    return result
  }
}
