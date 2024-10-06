import {ApiProperty} from '@nestjs/swagger'
import {IsNotEmpty, IsNumber} from 'class-validator'
import {BaseDto} from '@/common/class/base.abstract.dto'

export class CreateComboProductDto extends BaseDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  quantity: number

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  combo_id: number

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  product_id: number
}
