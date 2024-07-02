import {DeepPartial} from 'typeorm'
import {ApiProperty} from '@nestjs/swagger'
import {IsArray, IsDecimal, IsNotEmpty, IsNumber, IsOptional, IsString} from 'class-validator'
import {Product} from '@modules/inventory/product/entities/product.entity'

export class CreateCustomizationDto {
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  client_id: number

  @IsNotEmpty()
  @IsDecimal()
  @ApiProperty()
  readonly subtotal: number

  @IsNotEmpty()
  @IsDecimal()
  @ApiProperty()
  readonly total: number

  @IsNotEmpty()
  @IsDecimal()
  @ApiProperty()
  readonly discount: number

  @IsOptional()
  @IsArray()
  @ApiProperty()
  CustomizationProduct: DeepPartial<Product[]>
}
