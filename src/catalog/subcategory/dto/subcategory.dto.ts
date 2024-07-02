import {ApiProperty} from '@nestjs/swagger'
import {PartialType} from '@nestjs/mapped-types'
import {IsArray, IsOptional, ValidateNested} from 'class-validator'
import {UpdateSubcategoryDto} from '@modules/catalog/subcategory/dto/update-subcategory.dto'
import {ProductDto} from '@modules/inventory/product/dto/product.dto'

export class SubcategoryDto extends PartialType(UpdateSubcategoryDto) {
  @ValidateNested()
  @IsArray()
  @IsOptional()
  @ApiProperty()
  product: ProductDto[]
}
