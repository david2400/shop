import {ApiProperty} from '@nestjs/swagger'
import {IsBoolean, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, Min} from 'class-validator'
import {BaseDto} from '@common/class/dto/base.abstract.dto'

export class CreateProductDto extends BaseDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  Name: string

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  Description: string

  @IsInt()
  @Min(1)
  @ApiProperty()
  Stock: number

  @IsNumber()
  @ApiProperty()
  RealPrice: number

  @IsNumber()
  @ApiProperty()
  UnitPrice: number

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  Length: number

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  Width: number

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  Height: number

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  Weight: number

  @IsOptional()
  @IsString()
  @ApiProperty()
  ImageURL?: string

  @IsOptional()
  @IsBoolean()
  @ApiProperty()
  Available: boolean

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  BrandId: number

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  SubcategoryId: number

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  SupplierId: number
}
