import {ApiProperty} from '@nestjs/swagger'
import {IsNotEmpty, IsNumber, IsOptional, IsString} from 'class-validator'

export class CreateProductFeatureDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  value: number

  @IsOptional()
  @IsString()
  @ApiProperty()
  extra_data: string

  @IsNumber()
  @IsOptional()
  @ApiProperty()
  unit_product_id: number

  @IsNumber()
  @IsOptional()
  @ApiProperty()
  product_id: number

  @IsNumber()
  @IsOptional()
  @ApiProperty()
  feature_id: number
}
