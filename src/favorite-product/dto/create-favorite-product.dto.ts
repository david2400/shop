import {ApiProperty} from '@nestjs/swagger'
import {IsNumber, IsOptional} from 'class-validator'
import {BaseDto} from '@common/class/dto/base.abstract.dto'

export class CreateFavoriteProductDto extends BaseDto {
  @IsNumber()
  @IsOptional()
  @ApiProperty()
  ProductId: number

  @IsNumber()
  @IsOptional()
  @ApiProperty()
  ClientId: number
}
