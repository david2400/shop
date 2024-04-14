import {ApiProperty} from '@nestjs/swagger'
import {PartialType} from '@nestjs/mapped-types'
import {IsOptional, IsUUID} from 'class-validator'
import {CreateUnitProductDto} from '@modules/product-management/unit-product/dto/create-unit-product.dto'

export class UpdateUnitProductDto extends PartialType(CreateUnitProductDto) {
  @IsUUID()
  @IsOptional()
  @ApiProperty()
  readonly Id: number
}
