import {ApiProperty} from '@nestjs/swagger'
import {PartialType} from '@nestjs/mapped-types'
import {IsOptional, IsUUID} from 'class-validator'
import {CreateProductDto} from '@modules/inventory/product/dto/create-product.dto'

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @IsUUID()
  @IsOptional()
  @ApiProperty()
  readonly id: number
}
