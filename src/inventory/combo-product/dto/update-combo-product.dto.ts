import {ApiProperty} from '@nestjs/swagger'
import {PartialType} from '@nestjs/mapped-types'
import {IsOptional, IsUUID} from 'class-validator'
import {CreateComboProductDto} from '@modules/inventory/combo-product/dto/create-combo-product.dto'

export class UpdateComboProductDto extends PartialType(CreateComboProductDto) {
  @IsUUID()
  @IsOptional()
  @ApiProperty()
  readonly id: number
}
