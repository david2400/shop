import {ApiProperty} from '@nestjs/swagger'
import {PartialType} from '@nestjs/mapped-types'
import {IsArray, IsOptional, ValidateNested} from 'class-validator'
import {UpdateBrandDto} from '@modules/catalog/brand/dto/update-brand.dto'
import {ProductDto} from '@modules/inventory/product/dto/product.dto'

export class BrandDto extends PartialType(UpdateBrandDto) {
  @ValidateNested()
  @IsArray()
  @IsOptional()
  @ApiProperty()
  Product: ProductDto[]
}
