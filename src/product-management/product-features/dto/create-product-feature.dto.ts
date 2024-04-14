import {ApiProperty} from '@nestjs/swagger'
import {IsNotEmpty, IsNumber, IsOptional, IsString} from 'class-validator'

export class CreateProductFeatureDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  Value: number

  @IsOptional()
  @IsString()
  @ApiProperty()
  ExtraData: string

  @IsNumber()
  @IsOptional()
  @ApiProperty()
  UnitProductId: number

  @IsNumber()
  @IsOptional()
  @ApiProperty()
  ProductId: number

  @IsNumber()
  @IsOptional()
  @ApiProperty()
  FeatureId: number
}
