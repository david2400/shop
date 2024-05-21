import {ApiProperty, PartialType} from '@nestjs/swagger'
import {IsOptional, IsUUID} from 'class-validator'
import {CreateProductFeatureDto} from '@modules/product-management/product-features/dto/create-product-feature.dto'

export class UpdateProductFeatureDto extends PartialType(CreateProductFeatureDto) {
  @IsUUID()
  @IsOptional()
  @ApiProperty()
  readonly Id: number
}
