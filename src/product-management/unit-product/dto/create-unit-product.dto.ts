import {ApiProperty} from '@nestjs/swagger'
import {DeepPartial} from 'typeorm'
import {IsArray, IsNotEmpty, IsNumber, IsOptional, IsString} from 'class-validator'
import {BaseDto} from '@common/class/dto/base.abstract.dto'
import {FeatureDto} from '@modules/product-management/features/dto/feature.dto'

export class CreateUnitProductDto extends BaseDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  name: string

  @IsNumber()
  @IsOptional()
  @ApiProperty()
  greater_unit_id: number

  @IsNumber()
  @IsOptional()
  @ApiProperty()
  smaller_unit_id: number

  @IsArray()
  @IsOptional()
  @ApiProperty()
  unit_feature?: DeepPartial<FeatureDto[]>
}
