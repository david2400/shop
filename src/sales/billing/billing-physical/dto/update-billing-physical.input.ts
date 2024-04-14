import {ApiProperty} from '@nestjs/swagger'
import {PartialType} from '@nestjs/mapped-types'
import {IsOptional, IsUUID} from 'class-validator'
import {CreateBillingPhysicalDto} from '@modules/sales/billing/billing-physical/dto/create-billing-physical.input'

export class UpdateBillingPhysicalDto extends PartialType(CreateBillingPhysicalDto) {
  @IsUUID()
  @IsOptional()
  @ApiProperty()
  readonly Id: number
}
