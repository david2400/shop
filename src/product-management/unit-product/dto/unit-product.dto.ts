import {ApiProperty} from '@nestjs/swagger'
import {PartialType} from '@nestjs/mapped-types'
import {IsArray, IsOptional} from 'class-validator'
import {DeepPartial} from 'typeorm'
import {UpdateUnitProductDto} from '@modules/product-management/unit-product/dto/update-unit-product.dto'
import {ProductFeatureDto} from '@modules/product-management/product-features/dto/product-feature.dto'

export class UnitProductDto extends PartialType(UpdateUnitProductDto) {
  @IsArray()
  @IsOptional()
  @ApiProperty()
  product_feature: DeepPartial<ProductFeatureDto[]>
}
