import {ApiProperty, PartialType} from '@nestjs/swagger'
import {IsOptional, IsUUID} from 'class-validator'
import {UpdateProductFeatureDto} from '@modules/product-management/product-features/dto/update-product-feature.dto'

export class ProductFeatureDto extends PartialType(UpdateProductFeatureDto) {
  @IsUUID()
  @IsOptional()
  @ApiProperty()
  readonly Id: number
}
