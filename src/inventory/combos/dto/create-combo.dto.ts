import {IsArray, IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString} from 'class-validator'
import {DeepPartial} from 'typeorm'
import {ApiProperty} from '@nestjs/swagger'
import {BaseDto} from '@common/class/dto/base.abstract.dto'
import {ComboProductDto} from '@modules/inventory/combo-product/dto/combo-product.dto'

export class CreateComboDto extends BaseDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  Name: string

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  Description: string

  @IsOptional()
  @IsString()
  @ApiProperty()
  ImageURL?: string

  @IsOptional()
  @IsBoolean()
  @ApiProperty()
  Available: boolean

  @IsNumber()
  @ApiProperty()
  RealPrice: number

  @IsNumber()
  @ApiProperty()
  Price: number

  @IsArray()
  @IsOptional()
  @ApiProperty()
  ComboProduct: DeepPartial<ComboProductDto[]>
}
