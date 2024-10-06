import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {FavoriteProduct} from '@modules/userPreferences/favorite-product/entities/favorite-product.entity'
import {ClientModule} from '@modules/account/client/client.module'
import {ProductModule} from '@modules/inventory/product/product.module'
import {FavoriteProductRepository} from '@modules/userPreferences/favorite-product/repository/favorite-product.repository'
import {FavoriteProductService} from '@modules/userPreferences/favorite-product/services/favorite-product.service'
import {FavoriteProductController} from '@modules/userPreferences/favorite-product/controller/favorite-product.controller'

@Module({
  imports: [TypeOrmModule.forFeature([FavoriteProduct]), ProductModule, ClientModule],
  providers: [FavoriteProductService, FavoriteProductRepository],
  exports: [FavoriteProductService],
  controllers: [FavoriteProductController],
})
export class FavoriteProductModule {}
