import {ApiProperty} from '@nestjs/swagger'
import {PartialType} from '@nestjs/mapped-types'
import {IsOptional, IsUUID} from 'class-validator'
import {CreateBillingElectricDto} from '@modules/sales/billing/billing-electric/dto/create-billing-electric.input'

export class UpdateBillingElectricDto extends PartialType(CreateBillingElectricDto) {
  @IsUUID()
  @IsOptional()
  @ApiProperty()
  readonly Id: number
}
