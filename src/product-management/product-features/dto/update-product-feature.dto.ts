import {ApiProperty, PartialType} from '@nestjs/swagger'
import {CreateProductFeatureDto} from '@modules/product-management/product-features/dto/create-product-feature.dto'

export class UpdateProductFeatureDto extends PartialType(CreateProductFeatureDto) {}
