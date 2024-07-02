import {ApiProperty} from '@nestjs/swagger'
import {PartialType} from '@nestjs/mapped-types'
import {DeepPartial} from 'typeorm'
import {IsArray, IsOptional} from 'class-validator'
import {UpdateProductDto} from '@modules/inventory/product/dto/update-product.dto'
import {FavoriteProductDto} from '@modules/userPreferences/favorite-product/dto/favorite-product.dto'
import {ProductOrderDto} from '@modules/sales/product-order/dto/product-order.dto'
import {ComboProductDto} from '@modules/inventory/combo-product/dto/combo-product.dto'
import {ProductFeatureDto} from '@modules/product-management/product-features/dto/product-feature.dto'

export class ProductDto extends PartialType(UpdateProductDto) {
  @IsArray()
  @IsOptional()
  @ApiProperty()
  product_order?: DeepPartial<ProductOrderDto[]>

  @IsArray()
  @IsOptional()
  @ApiProperty()
  favorite_product?: DeepPartial<FavoriteProductDto[]>

  @IsArray()
  @IsOptional()
  @ApiProperty()
  combo_product?: DeepPartial<ComboProductDto[]>

  @IsArray()
  @IsOptional()
  @ApiProperty()
  product_feature?: DeepPartial<ProductFeatureDto[]>
}
