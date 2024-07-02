import {ApiProperty} from '@nestjs/swagger'
import {PartialType} from '@nestjs/mapped-types'
import {IsOptional, IsUUID} from 'class-validator'
import {CreateSupplierDto} from '@modules/inventory/supplier/dto/create-supplier.dto'

export class UpdateSupplierDto extends PartialType(CreateSupplierDto) {
  @IsUUID()
  @IsOptional()
  @ApiProperty()
  readonly id: number
}
