import {ApiProperty} from '@nestjs/swagger'
import {PartialType} from '@nestjs/mapped-types'
import {IsOptional, IsUUID} from 'class-validator'
import {CreateCategoryDto} from '@modules/catalog/category/dto/create-category.dto'

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {
  @IsUUID()
  @IsOptional()
  @ApiProperty()
  readonly Id: number
}
