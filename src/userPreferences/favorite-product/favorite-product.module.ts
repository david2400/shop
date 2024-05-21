import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {FavoriteProduct} from '@modules/favorite-product/entities/favorite-product.entity'
import {ClientModule} from '@modules/account/client/client.module'
import {ProductModule} from '@modules/inventory/product/product.module'
import {FavoriteProductRepository} from '@modules/favorite-product/repository/favorite-product.repository'
import {FavoriteProductService} from '@modules/favorite-product/services/favorite-product.service'
import {FavoriteProductController} from '@modules/favorite-product/controller/favorite-product.controller'

@Module({
  imports: [TypeOrmModule.forFeature([FavoriteProduct]), ProductModule, ClientModule],
  providers: [FavoriteProductService, FavoriteProductRepository],
  exports: [FavoriteProductService],
  controllers: [FavoriteProductController],
})
export class FavoriteProductModule {}
