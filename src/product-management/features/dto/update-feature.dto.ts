import {ApiProperty} from '@nestjs/swagger'
import {PartialType} from '@nestjs/mapped-types'
import {IsOptional, IsUUID} from 'class-validator'
import {CreateFeatureDto} from '@modules/product-management/features/dto/create-feature.dto'

export class UpdateFeatureDto extends PartialType(CreateFeatureDto) {
  @IsUUID()
  @IsOptional()
  @ApiProperty()
  readonly Id: number
}
