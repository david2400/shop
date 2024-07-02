import {ApiProperty} from '@nestjs/swagger'
import {PartialType} from '@nestjs/mapped-types'
import {IsOptional, IsUUID} from 'class-validator'
import {CreateSubcategoryDto} from '@modules/catalog/subcategory/dto/create-subcategory.dto'

export class UpdateSubcategoryDto extends PartialType(CreateSubcategoryDto) {
  @IsUUID()
  @IsOptional()
  @ApiProperty()
  readonly id: number
}
