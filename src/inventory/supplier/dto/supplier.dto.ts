import {ApiProperty} from '@nestjs/swagger'
import {PartialType} from '@nestjs/mapped-types'
import {DeepPartial} from 'typeorm'
import {IsArray, IsOptional, ValidateNested} from 'class-validator'
import {UpdateSupplierDto} from '@modules/inventory/supplier/dto/update-supplier.dto'
import {ProductDto} from '@modules/inventory/product/dto/product.dto'

export class SupplierDto extends PartialType(UpdateSupplierDto) {
  @ValidateNested()
  @IsArray()
  @IsOptional()
  @ApiProperty()
  Product?: DeepPartial<ProductDto[]>
}
