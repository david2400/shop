import {ApiProperty, PartialType} from '@nestjs/swagger'
import {IsOptional, IsUUID} from 'class-validator'
import {CreateCustomizationDto} from '@modules/userPreferences/customization/dto/create-customization.dto'

export class UpdateCustomizationDto extends PartialType(CreateCustomizationDto) {
  @IsUUID()
  @IsOptional()
  @ApiProperty()
  readonly id: number
}
