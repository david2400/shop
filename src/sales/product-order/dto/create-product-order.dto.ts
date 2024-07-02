import {ApiProperty} from '@nestjs/swagger'
import {IsDecimal, IsInt, IsNotEmpty, IsNumber, IsOptional, ValidateNested} from 'class-validator'
import {BaseDto} from '@common/class/dto/base.abstract.dto'

export class CreateProductOrderDto extends BaseDto {
  @IsNotEmpty()
  @IsInt()
  @ApiProperty()
  readonly quantity: number

  @IsNotEmpty()
  @IsDecimal()
  @ApiProperty()
  readonly discount: number

  @IsNotEmpty()
  @IsDecimal()
  @ApiProperty()
  readonly subtotal: number

  @IsNotEmpty()
  @IsDecimal()
  @ApiProperty()
  readonly total: number

  @ValidateNested()
  @IsNumber()
  @IsOptional()
  @ApiProperty()
  product_id: number

  @ValidateNested()
  @IsNumber()
  @IsOptional()
  @ApiProperty()
  OrderId: number
}
