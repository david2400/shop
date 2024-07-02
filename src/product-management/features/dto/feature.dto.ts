import {ApiProperty} from '@nestjs/swagger'
import {PartialType} from '@nestjs/mapped-types'
import {DeepPartial} from 'typeorm'
import {IsArray, IsOptional} from 'class-validator'
import {UpdateFeatureDto} from '@modules/product-management/features/dto/update-feature.dto'
import {ProductFeatureDto} from '@modules/product-management/product-features/dto/product-feature.dto'

export class FeatureDto extends PartialType(UpdateFeatureDto) {
  @IsArray()
  @IsOptional()
  @ApiProperty()
  product_feature?: DeepPartial<ProductFeatureDto[]>
}
