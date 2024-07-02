import {ApiProperty} from '@nestjs/swagger'
import {PartialType} from '@nestjs/mapped-types'
import {IsArray, IsOptional, ValidateNested} from 'class-validator'
import {UpdateCategoryDto} from '@modules/catalog/category/dto/update-category.dto'
import {SubcategoryDto} from '@modules/catalog/subcategory/dto/subcategory.dto'

export class CategoryDto extends PartialType(UpdateCategoryDto) {
  @ValidateNested()
  @IsArray()
  @IsOptional()
  @ApiProperty()
  subcategory: SubcategoryDto[]
}
