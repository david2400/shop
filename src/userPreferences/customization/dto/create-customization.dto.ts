import {DeepPartial} from 'typeorm'
import {ApiProperty} from '@nestjs/swagger'
import {IsArray, IsDecimal, IsNotEmpty, IsNumber, IsOptional, IsString} from 'class-validator'
import {Product} from '@modules/inventory/product/entities/product.entity'

export class CreateCustomizationDto {
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

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  client_id: number

  @IsOptional()
  @IsArray()
  @ApiProperty()
  customization_product: DeepPartial<Product[]>
}
