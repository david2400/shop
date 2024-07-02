import {ApiProperty} from '@nestjs/swagger'
import {PartialType} from '@nestjs/mapped-types'
import {IsOptional, IsUUID} from 'class-validator'
import {CreateComboDto} from '@modules/inventory/combos/dto/create-combo.dto'

export class UpdateComboDto extends PartialType(CreateComboDto) {
  @IsUUID()
  @IsOptional()
  @ApiProperty()
  readonly id: number
}
