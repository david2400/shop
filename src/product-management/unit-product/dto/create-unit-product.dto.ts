import {ApiProperty} from '@nestjs/swagger'
import {DeepPartial} from 'typeorm'
import {IsArray, IsNotEmpty, IsNumber, IsOptional, IsString} from 'class-validator'
import {BaseDto} from '@common/class/dto/base.abstract.dto'
import {FeatureDto} from '@modules/product-management/features/dto/feature.dto'

export class CreateUnitProductDto extends BaseDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  Name: string

  @IsNumber()
  @IsOptional()
  @ApiProperty()
  GreaterUnitId: number

  @IsNumber()
  @IsOptional()
  @ApiProperty()
  SmallerUnitId: number

  @IsArray()
  @IsOptional()
  @ApiProperty()
  UnitFeature?: DeepPartial<FeatureDto[]>
}
