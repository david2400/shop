import {IsDate, IsDecimal, IsNotEmpty, IsNumberString, IsOptional} from 'class-validator'
import {ApiProperty} from '@nestjs/swagger'
import {BaseDto} from '@common/class/dto/base.abstract.dto'

export class CreateOrderDto extends BaseDto {
  @IsNumberString()
  @ApiProperty()
  ComplementaryOrder: string

  @IsNotEmpty()
  @ApiProperty()
  State: string

  @IsDecimal()
  @ApiProperty()
  Total: number
}
