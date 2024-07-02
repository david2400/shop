import {ApiProperty} from '@nestjs/swagger'
import {DeepPartial} from 'typeorm'
import {IsArray, IsNotEmpty, IsOptional, IsString} from 'class-validator'
import {BaseDto} from '@common/class/dto/base.abstract.dto'
import {UnitProductDto} from '@modules/product-management/unit-product/dto/unit-product.dto'
import {UnitProduct} from '@modules/product-management/unit-product/entities/unit-product.entity'

export class CreateFeatureDto extends BaseDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  name: string

  @IsOptional()
  @IsArray()
  @ApiProperty()
  feature_unit: DeepPartial<UnitProduct[]>
}
