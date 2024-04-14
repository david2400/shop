import {ApiProperty} from '@nestjs/swagger'
import {PartialType} from '@nestjs/mapped-types'
import {IsOptional, IsUUID} from 'class-validator'
import {CreateOrderDto} from '@modules/sales/order/dto/create-order.dto'

export class UpdateOrderDto extends PartialType(CreateOrderDto) {
  @IsUUID()
  @IsOptional()
  @ApiProperty()
  readonly Id: number
}
