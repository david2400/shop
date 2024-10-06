import {ApiProperty} from '@nestjs/swagger'
import {IsNumber, IsOptional} from 'class-validator'
import {BaseDto} from '@/common/class/base.abstract.dto'

export class CreateFavoriteProductDto extends BaseDto {
  @IsNumber()
  @IsOptional()
  @ApiProperty()
  product_id: number

  @IsNumber()
  @IsOptional()
  @ApiProperty()
  client_id: number
}
