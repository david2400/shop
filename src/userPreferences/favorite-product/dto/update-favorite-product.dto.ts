import {ApiProperty} from '@nestjs/swagger'
import {PartialType} from '@nestjs/mapped-types'
import {IsOptional, IsUUID} from 'class-validator'
import {CreateFavoriteProductDto} from '@modules/favorite-product/dto/create-favorite-product.dto'

export class UpdateFavoriteProductDto extends PartialType(CreateFavoriteProductDto) {
  @IsUUID()
  @IsOptional()
  @ApiProperty()
  readonly Id: number
}
