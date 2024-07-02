import {IsDate, IsDecimal, IsNotEmpty, IsNumberString, IsOptional} from 'class-validator'
import {ApiProperty} from '@nestjs/swagger'
import {BaseDto} from '@common/class/dto/base.abstract.dto'

export class CreateOrderDto extends BaseDto {
  @IsNumberString()
  @ApiProperty()
  complementary_order: string

  @IsNotEmpty()
  @ApiProperty()
  state: string

  @IsDecimal()
  @ApiProperty()
  total: number
}
