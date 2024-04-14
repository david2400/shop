import {ApiProperty} from '@nestjs/swagger'
import {PartialType} from '@nestjs/mapped-types'
import {DeepPartial} from 'typeorm'
import {IsArray, IsOptional, ValidateNested} from 'class-validator'
import {UpdateOrderDto} from '@modules/sales/order/dto/update-order.dto'
import {ProductOrderDto} from '@modules/sales/product-order/dto/product-order.dto'

export class OrderDto extends PartialType(UpdateOrderDto) {
  @ValidateNested()
  @IsArray()
  @IsOptional()
  @ApiProperty()
  ProductOrder?: DeepPartial<ProductOrderDto[]>
}
