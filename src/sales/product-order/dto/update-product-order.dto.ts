import {ApiProperty} from '@nestjs/swagger'
import {PartialType} from '@nestjs/mapped-types'
import {IsOptional, IsUUID} from 'class-validator'
import {CreateProductOrderDto} from '@modules/sales/product-order/dto/create-product-order.dto'

export class UpdateProductOrderDto extends PartialType(CreateProductOrderDto) {
  @IsUUID()
  @IsOptional()
  @ApiProperty()
  readonly Id: number
}
