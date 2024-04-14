import {ApiProperty} from '@nestjs/swagger'
import {IsNotEmpty, IsNumber} from 'class-validator'
import {BaseDto} from '@common/class/dto/base.abstract.dto'

export class CreateComboProductDto extends BaseDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  Quantity: number

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  ComboId: number

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  ProductId: number
}
