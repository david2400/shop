import {IsArray, IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString} from 'class-validator'
import {DeepPartial} from 'typeorm'
import {ApiProperty} from '@nestjs/swagger'
import {BaseDto} from '@common/class/dto/base.abstract.dto'
import {ComboProductDto} from '@modules/inventory/combo-product/dto/combo-product.dto'

export class CreateComboDto extends BaseDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  description: string

  @IsOptional()
  @IsString()
  @ApiProperty()
  image_url?: string

  @IsOptional()
  @IsBoolean()
  @ApiProperty()
  available: boolean

  @IsNumber()
  @ApiProperty()
  real_price: number

  @IsNumber()
  @ApiProperty()
  price: number

  @IsArray()
  @IsOptional()
  @ApiProperty()
  combo_product: DeepPartial<ComboProductDto[]>
}
