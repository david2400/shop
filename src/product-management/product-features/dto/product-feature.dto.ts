import {PartialType} from '@nestjs/swagger'
import {UpdateProductFeatureDto} from '@modules/product-management/product-features/dto/update-product-feature.dto'

export class ProductFeatureDto extends PartialType(UpdateProductFeatureDto) {}
