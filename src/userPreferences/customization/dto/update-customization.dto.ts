import {PartialType} from '@nestjs/swagger'
import {CreateCustomizationDto} from '@modules/userPreferences/customization/dto/create-customization.dto'

export class UpdateCustomizationDto extends PartialType(CreateCustomizationDto) {}
