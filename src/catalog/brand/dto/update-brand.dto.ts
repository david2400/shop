import {ApiProperty} from '@nestjs/swagger'
import {PartialType} from '@nestjs/mapped-types'
import {IsOptional, IsUUID} from 'class-validator'
import {CreateBrandDto} from '@modules/catalog/brand/dto/create-brand.dto'

export class UpdateBrandDto extends PartialType(CreateBrandDto) {
  @IsUUID()
  @IsOptional()
  @ApiProperty()
  readonly id: number
}
