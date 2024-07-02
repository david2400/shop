import {ApiProperty} from '@nestjs/swagger'
import {PartialType} from '@nestjs/mapped-types'
import {UpdateFavoriteProductDto} from '@modules/userPreferences/favorite-product/dto/update-favorite-product.dto'

export class FavoriteProductDto extends PartialType(UpdateFavoriteProductDto) {}
