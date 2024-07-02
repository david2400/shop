import {ApiProperty} from '@nestjs/swagger'
import {IsBoolean, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, Min} from 'class-validator'
import {BaseDto} from '@common/class/dto/base.abstract.dto'

export class CreateProductDto extends BaseDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  description: string

  @IsInt()
  @Min(1)
  @ApiProperty()
  stock: number

  @IsNumber()
  @ApiProperty()
  real_price: number

  @IsNumber()
  @ApiProperty()
  unit_price: number

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  length: number

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  width: number

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  height: number

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  weight: number

  @IsOptional()
  @IsString()
  @ApiProperty()
  image_url?: string

  @IsOptional()
  @IsBoolean()
  @ApiProperty()
  available: boolean

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  brand_id: number

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  subcategory_id: number

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  supplier_id: number
}
