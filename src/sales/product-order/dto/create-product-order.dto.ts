import {ApiProperty} from '@nestjs/swagger'
import {IsDecimal, IsInt, IsNotEmpty, IsNumber, IsOptional, ValidateNested} from 'class-validator'
import {BaseDto} from '@common/class/dto/base.abstract.dto'

export class CreateProductOrderDto extends BaseDto {
  @IsNotEmpty()
  @IsInt()
  @ApiProperty()
  readonly Quantity: number

  @IsNotEmpty()
  @IsDecimal()
  @ApiProperty()
  readonly Discount: number

  @IsNotEmpty()
  @IsDecimal()
  @ApiProperty()
  readonly Subtotal: number

  @IsNotEmpty()
  @IsDecimal()
  @ApiProperty()
  readonly Total: number

  @ValidateNested()
  @IsNumber()
  @IsOptional()
  @ApiProperty()
  ProductId: number

  @ValidateNested()
  @IsNumber()
  @IsOptional()
  @ApiProperty()
  OrderId: number
}
