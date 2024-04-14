import {ApiProperty} from '@nestjs/swagger'
import {PartialType} from '@nestjs/mapped-types'
import {UpdateProductOrderDto} from '@modules/sales/product-order/dto/update-product-order.dto'

export class ProductOrderDto extends PartialType(UpdateProductOrderDto) {}
